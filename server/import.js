let coinwallet = require('node-altcoin')();
let fs = require('fs');
const Sequelize = require("sequelize");
const config = require('./config/lasvegascoind.json');
const sqlconfig = require('./config/config.json')["development"];
let models = require('./models');

let Block = models.block;
let Tx = models.tx;
let Vin = models.vin;
let Vout = models.vout;

// console.log(`models:`, models);

let sequelize;

if (process.env.DATABASE_URL) {
	sequelize = new Sequelize(process.env.DATABASE_URL, sqlconfig);
} else {
	sequelize = new Sequelize(sqlconfig.database, sqlconfig.username, sqlconfig.password, sqlconfig);
}

coinwallet.set('user', config.walletusername);
coinwallet.set('pass', config.walletpassword);
coinwallet.set({port: config.walletport});

let argsArray = require('optimist').argv;
let cmd = argsArray.cmd;

let start, end;

async function switchOnCmd(argsArray) {
	switch (cmd.toLowerCase()) {
		case "getinfo":
			getInfo();
			break;
		case "getblocks":
			start = argsArray.start;
			end = argsArray.end;
			getBlocks(start, end);
			break;
		case "gettransaction":
			let txid = argsArray.txid;
			getTransaction(txid);
			break;
		case "gettransactions":
			start = argsArray.start;
			end = argsArray.end;
			getTransactions(start, end);
	}
}

// node import.js --cmd=getinfo
function getInfo() {
	coinwallet.exec('getInfo', function (err, getinfo) {
		if (err)
			throw err;
		console.log(getinfo);
	});
}

// node import.js --cmd=getblocks --start=1 --end=10
async function getBlocks(start, end) {
	let blocks = [];
	for (let i = start; i <= end; i++) {
		try {
			blocks.push(await getBlockHash(i));
			// let block = await getBlock(hash);
		} catch (e) {
			console.log(`error calling getBlockHash(${i})`);
		}
	}
	Promise.all(blocks)
		.then(block => {
			console.log("DONE!");
		})
}

async function getBlockHash(height) {
	console.log(`getBlockHash->height: ${height}`);
	coinwallet.exec('getBlockHash', height, async function (err, blockhash) {
		if (err)
			throw err;
		try {
			return await getBlock(blockhash);
		} catch (e) {
			console.log(`e: `, e);
		}
	})
}


async function getBlock(hash) {
	console.log(`getBlock->hash: ${hash}`);
	coinwallet.exec('getBlock', hash, function (err, block) {
		if (err)
			throw err;
		else {
			console.log(`block`, block);
			Block.create({
				hash: block.hash,
				confirmations: block.confirmations,
				size: block.size,
				height: block.height,
				time: block.time,
				difficulty: block.difficulty,
				nextblockhash: block.nextblockhash,
				previousblockhash: block.previousblockhash,
				raw: JSON.stringify(block)
			})

			return block;
		}
	})
}

// node import.js --cmd=gettransactions --start=1 --end=10
function getTransactions(start, end) {
	let txs = [];

	let blocks = Block.findAll({
		where: {
			height: {
				$gte: start,
				$lte: end
			}
		}
	});

	blocks
		.then(blocks => {
			blocks.forEach(blockRow => {
				let block = blockRow.dataValues;
				let blockRaw = JSON.parse(block.raw);
				let txids = blockRaw.tx;
				txids.forEach(txid => {
					txs.push(getTransaction(txid, blockRow));
				})
			});

			Promise.all(txs)
				.then(tx => {
					console.log("DONE!");
				})
		})
}

// node import.js --cmd=gettransaction --txid=784bcbe8af9bc651f222c8f1a7a0fc4a3456cca2ef0fa58329488c6b0e94f690
async function getTransaction(txid, block) {
	console.log(`getTransaction->txid: ${txid}`);
	return coinwallet.exec('getrawtransaction', txid, 1, function (err, tx) {
		if (err)
			throw err;
		else {
			let transaction = Tx.create({
				txid: tx.txid,
				blockhash: tx.blockhash,
				time: tx.time,
				raw: JSON.stringify(tx)
			});

			transaction.then(tx => {
				block.setTxes([tx]);

				tx.forEach(tx => {
					let vins = tx.dataValues.vin;
					let vouts = tx.dataValues.vout;

					console.log("TX:", tx);
				})
				// vins.forEach(vin => {
				// 	let thisVin = Vin.create({
				// 		transactionId: tx.dataValues.txid,
				// 		raw: JSON.stringify(vin)
				// 	});
				//
				// 	thisVin
				// 		.then(vinRow => {
				// 			if (vin.vout !== undefined) {
				// 				return vinRow.update({
				// 					vout: vin.vout
				// 				})
				// 			} else {
				// 				return vinRow;
				// 			}
				// 		})
				// 		.then(vinRow => {
				// 			tx.setVins([vinRow])
				// 		})
				// })
			});
		}
	});
}

switchOnCmd(argsArray);

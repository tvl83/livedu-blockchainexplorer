const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')({origin: true});

const request = require('request-promise');

const app = express();
const Sequelize = require("sequelize");
const sqlconfig = require('./config/config.json')["development"];
let models = require('./models');

let Block = models.block;
let Tx = models.tx;
let Vin = models.vin;
let Vout = models.vout;
let Address = models.address;

let sequelize;

if (process.env.DATABASE_URL) {
	sequelize = new Sequelize(process.env.DATABASE_URL, sqlconfig);
} else {
	sequelize = new Sequelize(sqlconfig.database, sqlconfig.username, sqlconfig.password, sqlconfig);
}
const Op = Sequelize.Op;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/block', function (req, res) {
	console.log(`req`, req);
	console.log(`res`, res);
	console.log('block called');
	cors(req, res, () => {
		const block = req.query.block;
		if (block.length === 64) {
			Block.find({
				where: {
					hash: {
						[Op.eq]: block
					}
				}
			})
				.then(result => {

					result.raw = JSON.parse(result.raw);

					res.send(result);
				});
		} else if (Number.isInteger(parseInt(block))) {
			Block.find({
				where: {
					height: {
						[Op.eq]: block
					}
				}
			})
				.then(result => {
					let responseBody = {
						txes: []
					};
					responseBody.block = result.dataValues;
					responseBody.block.raw = JSON.parse(result.dataValues.raw);

					result.getTxes().then(associatedTxes => {
						console.log("associatedTxes[0].dataValues");
						console.log(associatedTxes[0].dataValues);

						associatedTxes.forEach(tx => {
							console.log("tx.dataValues");
							console.log(tx.dataValues);

							tx.raw = JSON.parse(tx.raw);

							responseBody.txes.push(tx)
						});
						console.log(responseBody);
						res.send(responseBody);
					});
				});
		}
	})
});

app.get('/latestblocks', (req, res) => {
	const count = parseInt(req.query.count) || 10;

	console.log("inside latestblocks");
	console.log(count);
	cors(req, res, () => {
		Block.findAll(
			{
				limit: count,
				order: [
					['height', 'DESC']
				]
			}
		)
			.then(results => {

				results.forEach(block => {
					block.raw = JSON.parse(block.raw);
				});

				res.send(results);
			})
	});
});


app.listen(3001, function (err) {
	if (err) {
		return console.log(err);
	}
	console.log('API Sever is listening on http://localhost:3001');
});
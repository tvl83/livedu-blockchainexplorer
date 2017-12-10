module.exports = function (sequelize, DataTypes) {

  const Txs = sequelize.define('txs', {
    txid: DataTypes.STRING,
    blockhash: DataTypes.STRING,
    time: DataTypes.INTEGER,
    raw: DataTypes.STRING
  });

  return Txs;
}

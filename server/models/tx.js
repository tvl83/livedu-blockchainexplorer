module.exports = function (sequelize, DataTypes) {

  let Txs = sequelize.define('txs', {
    txid: {type: DataTypes.STRING, unique: true},
    blockhash: DataTypes.STRING,
    time: DataTypes.INTEGER,
    raw: DataTypes.TEXT
  });

  Txs.associate = function(models){
    Txs.hasMany(models.vins, { as: 'Vin', foreign: 'vinId'});
    // Txs.hasMany(models.vouts);
    Txs.belongsTo(models.blocks)
  }

  return Txs;
}

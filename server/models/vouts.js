module.exports = function (sequelize, DataTypes) {
  let Vout = sequelize.define('vout', {
    value: DataTypes.INTEGER,
    n: DataTypes.INTEGER,
    scriptPubKey: DataTypes.STRING,
    type: DataTypes.STRING,
    raw: DataTypes.TEXT
  });
  // Vouts.associate = function(models){
  //   Vouts.belongsTo(models.txs, {as: 'TransactionId'});
  //   Vouts.belongsTo(models.addresses);
  // }

  return Vout;
}

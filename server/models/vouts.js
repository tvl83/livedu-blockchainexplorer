module.exports = function (sequelize, DataTypes) {
  let Vouts = sequelize.define('vouts', {
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

  return Vouts;
}

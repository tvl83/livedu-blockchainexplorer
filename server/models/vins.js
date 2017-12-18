module.exports = function (sequelize, DataTypes) {
  let Vins = sequelize.define('vins', {
    transactionId: DataTypes.STRING,
    vout: DataTypes.INTEGER,
    raw: DataTypes.TEXT
  });

  Vins.associate = function(models){
    Vins.belongsTo(models.txs);
    // Vins.belongsTo(models.addresses, { as: 'Address', through: 'address_vins', foreignKey: 'vinId'});
  }

  return Vins;
}

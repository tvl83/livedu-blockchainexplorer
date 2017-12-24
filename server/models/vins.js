module.exports = function (sequelize, DataTypes) {
  let Vin = sequelize.define('vin', {
    transactionId: DataTypes.STRING,
    vout: DataTypes.INTEGER,
    raw: DataTypes.TEXT
  });

  Vin.associate = function(models){
    Vin.belongsTo(models.tx);
    // Vins.belongsTo(models.addresses, { as: 'Address', through: 'address_vins', foreignKey: 'vinId'});
  }

  return Vin;
}

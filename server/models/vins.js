module.exports = function (sequelize, DataTypes) {
  let Vin = sequelize.define('vin', {
    transactionId: DataTypes.STRING,
    vout: DataTypes.INTEGER,
    raw: DataTypes.TEXT
  });

  Vin.associate = function(models){
    Vin.belongsTo(models.tx);
    Vin.belongsTo(models.address, { unique:false } );
  }

  return Vin;
}

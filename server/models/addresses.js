module.exports = function (sequelize, DataTypes) {
  let Address = sequelize.define('address', {
    address: {type: DataTypes.STRING, unique: true},
    balance: DataTypes.FLOAT
  });

  Address.associate = function(models){
    Address.hasMany(models.vin);
    Address.hasMany(models.vout);
  } 

  return Address;
}

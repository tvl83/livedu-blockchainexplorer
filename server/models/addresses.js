module.exports = function (sequelize, DataTypes) {
  let Addresses = sequelize.define('addresses', {
    address: DataTypes.STRING,
    balance: DataTypes.FLOAT
  });

  return Addresses;
}

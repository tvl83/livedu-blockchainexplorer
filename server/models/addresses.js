module.exports = function (sequelize, DataTypes) {
  let Addresses = sequelize.define('addresses', {
    address: {type: DataTypes.STRING, unique: true},
    balance: DataTypes.FLOAT
  });

  Addresses.associate = function(models){
    Addresses.belongsToMany(models.vins, { as: 'LedgerOut', through: 'address_ledgerout', foreignKey: 'addressId'});
    Addresses.belongsToMany(models.vouts, { as: 'LedgerIn', through: 'address_ledgerin', foreignKey: 'addressId'});
  }

  return Addresses;
}

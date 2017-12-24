module.exports = function (sequelize, DataTypes) {
  let Address = sequelize.define('address', {
    address: {type: DataTypes.STRING, unique: true},
    balance: DataTypes.FLOAT
  });

  Address.associate = function(models){
    Address.belongsToMany(models.vin, { as: 'LedgerOut', through: 'address_ledgerout', foreignKey: 'addressId'});
    Address.belongsToMany(models.vout, { as: 'LedgerIn', through: 'address_ledgerin', foreignKey: 'addressId'});
  }

  return Address;
}

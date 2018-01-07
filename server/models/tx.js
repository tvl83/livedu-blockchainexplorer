module.exports = function (sequelize, DataTypes) {

  let Tx = sequelize.define('tx', {
    txid: {type: DataTypes.STRING, unique: true},
    height: DataTypes.INTEGER,
    blockhash: DataTypes.STRING,
    time: DataTypes.INTEGER,
    raw: DataTypes.TEXT
  });

  Tx.associate = function(models){
    Tx.hasMany(models.vin, { as: 'Vin', foreign: 'vinId', unique:false});
    Tx.hasMany(models.vout, { as: 'Vout', foreign: 'voutId', unique:false});
    Tx.belongsTo(models.block, { unique:false } );
  };
 
  return Tx;
};

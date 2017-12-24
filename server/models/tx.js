module.exports = function (sequelize, DataTypes) {

  let Tx = sequelize.define('tx', {
    txid: {type: DataTypes.STRING, unique: true},
    blockhash: DataTypes.STRING,
    time: DataTypes.INTEGER,
    raw: DataTypes.TEXT
  });

  Tx.associate = function(models){
    Tx.hasMany(models.vin, { as: 'Vin', foreign: 'vinId'});
    // Txs.hasMany(models.vouts);
    // Tx.hasMany(models.block, {as: 'Blocks', through: 'block_txes', foreignKey: 'blockId'})
    Tx.belongsTo(models.block,
      {
        unique:false
      }
    );
  };

  return Tx;
};

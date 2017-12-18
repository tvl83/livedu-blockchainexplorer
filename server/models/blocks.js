module.exports = function (sequelize, DataTypes) {
  let Blocks = sequelize.define('blocks', {
    hash: {type: DataTypes.STRING, unique: true},
    confirmations: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    height: {type: DataTypes.INTEGER, unique: true},
    time: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER,
    nextblockhash: DataTypes.STRING,
    previousblockhash: DataTypes.STRING,
    raw: DataTypes.TEXT
  });

  Blocks.associate = function(models){
    Blocks.hasMany(models.txs, {as: 'Txs'});
  }

  return Blocks;
}

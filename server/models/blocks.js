module.exports = function (sequelize, DataTypes) {
  let Block = sequelize.define('block', {
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

  Block.associate = function(models){
    Block.hasMany(models.tx);
  };

  return Block;
};

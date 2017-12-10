module.exports = function (sequelize, DataTypes) {
  const Blocks = sequelize.define('block', {
    hash: DataTypes.STRING,
    confirmations: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER,
    nextblockhash: DataTypes.STRING,
    previousblockhash: DataTypes.STRING,
    raw: DataTypes.STRING
  });

  return Blocks;
}

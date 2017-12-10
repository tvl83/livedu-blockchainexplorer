module.exports = function (sequelize, DataTypes) {
  let Vouts = sequelize.define('vouts', {
    value: DataTypes.INTEGER,
    n: DataTypes.INTEGER,
    scriptPubKey: DataTypes.STRING,
    type: DataTypes.STRING,
    raw: DataTypes.STRING
  });

  return Vouts;
}

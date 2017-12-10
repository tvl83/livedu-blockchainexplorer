module.exports = function (sequelize, DataTypes) {
  const Vins = sequelize.define('vins', {
    txid: DataTypes.STRING,
    vout: DataTypes.INTEGER,
    raw: DataTypes.STRING
  });

  return Vins;
}

module.exports = function (sequelize, DataTypes) {
  let Vout = sequelize.define('vout', {
    height: DataTypes.INTEGER,
    value: DataTypes.FLOAT,
    n: DataTypes.INTEGER,
    scriptPubKey: DataTypes.TEXT,
    type: DataTypes.STRING,
    raw: DataTypes.TEXT
  });
  Vout.associate = function(models){
    Vout.belongsTo(models.tx, { unique:false });
    Vout.belongsTo(models.address, { unique:false } );
  }

  return Vout;
}

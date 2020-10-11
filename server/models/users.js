/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const users = sequelize.define(
    "users",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      phone_number: {
        type: DataTypes.STRING(16),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      maner: {
        type: DataTypes.DECIMAL(3, 1),
        allowNull: false,
        defaultValue: 36.5,
      },
      address: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
    }
  );

  users.associate = (db) => {
    db.users.hasMany(db.products, {
      foreignKey: "user_id",
      targetKey: "id",
    });

    db.users.belongsToMany(db.products, { through: "user_product" });
  };

  return users;
};

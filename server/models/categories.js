/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const categories = sequelize.define(
    "categories",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "categories",
    }
  );

  categories.associate = (db) => {
    db.categories.hasMany(db.products, {
      foreignKey: "category_id",
      sourceKey: "id",
    });
  };

  return categories;
};

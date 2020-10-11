/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('product_images', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		image_url: {
			type: DataTypes.STRING(2048),
			allowNull: false
		},
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'products',
				key: 'id'
			},
			unique: "FK_product_images_product_id_products_id"
		},
		order: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'product_images'
		});
};

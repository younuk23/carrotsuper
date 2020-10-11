/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_product', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'products',
				key: 'id'
			},
			unique: "FK_user_product_product_id_products_id"
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			},
			unique: "FK_user_product_user_id_users_id"
		}
	}, {
		sequelize,
		tableName: 'user_product'
		});
};

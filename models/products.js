/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('products', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING(256),
			allowNull: false,
			comment: "제목"
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
			comment: "설명"
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "가격"
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "카테고리 아이디 FK",
			references: {
				model: 'categories',
				key: 'id'
			},
			unique: "FK_products_category_id_categories_id"
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "유저 아이디 FK",
			references: {
				model: 'users',
				key: 'id'
			},
			unique: "FK_products_user_id_users_id"
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		view: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		like_count: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		}
	}, {
		sequelize,
		tableName: 'products'
		});
};

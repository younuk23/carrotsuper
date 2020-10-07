/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('categories', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(64),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'categories'
		});
};

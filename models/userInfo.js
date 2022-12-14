module.exports = (sequelize, Sequelize) => {
	const userInfo = sequelize.define("userInfo", {
		USERID: {
  			type: Sequelize.STRING(100),
			allowNull: false,
			primaryKey: true
		},
  		USERNAME: {
  			type: Sequelize.STRING(100),
			allowNull: false
		},
      	AGE: {
  			type: Sequelize.INTEGER,
			  allowNull: true
		},
		SEX: {
			type: Sequelize.STRING(10),
			allowNull: true
		},
		Adress: {
			type: Sequelize.STRING(100),
			allowNull: true
		}
	},{
		timestamps: false,
		freezeTableName: true
	});

	return userInfo
};
const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
  	dialect: dbConfig.dialect,
  	operatorsAliases: 0,
  
  	pool: {
    	max: dbConfig.pool.max,	
   		min: dbConfig.pool.min,
      	acquire: dbConfig.pool.acquire,
      	idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.userInfo = require('./userInfo.js')(sequelize, Sequelize);
db.MEMBER = require('./MEMBER.js')(sequelize, Sequelize);
db.ORDER = require('./ORDER.js')(sequelize, Sequelize);
db.VisualData = require('./VisualData.js')(sequelize, Sequelize);

module.exports = db;
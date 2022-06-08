const Sequelize = require("sequelize");

module.exports = new Sequelize({
	dialect: "mysql",
	username: "root",
	password: "",
	database: "manaknight-pre-dev-2",
	host: "localhost",
	port: 3306,
	logging: console.log,
	timezone: "-04:00",
	pool: {
		maxConnections: 1,
		minConnections: 0,
		maxIdleTime: 100,
	},
	define: {
		timestamps: false,
		underscoredAll: true,
		underscored: true,
	},
});

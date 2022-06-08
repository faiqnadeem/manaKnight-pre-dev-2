const sequelize = require("sequelize");
const db = require("../config/database");

const Order = db.define("order", {
	from_airport: {
		type: sequelize.STRING,
	},
	from_country: {
		type: sequelize.STRING,
	},
	to_airport: {
		type: sequelize.STRING,
	},
	to_country: {
		type: sequelize.STRING,
	},
	total: {
		type: sequelize.INTEGER,
	},
	stripe_id: {
		type: sequelize.STRING,
	},
	Payment_status: {
		type: sequelize.STRING,
	},
});

module.exports = Order;

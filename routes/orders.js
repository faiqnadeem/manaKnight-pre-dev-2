const express = require("express");
const router = express.Router();

const db = require("../config/database");
const Order = require("../Models/Order");

router.get("/", (req, res) =>
	Order.findAll()
		.then(res.send("i am at orders"))
		.catch((err) => res.send(err))
);

router.get("/add", (req, res) => {
	const data = {
		from_airport: "pakistan",
		from_country: "dubai",
		to_airport: "england",
		to_country: "india",
		total: "9878",
		stripe_id: "8977459874597345",
		Payment_status: "paid",
	};
	let {
		from_airport,
		from_country,
		to_airport,
		to_country,
		total,
		stripe_id,
		Payment_status,
	} = data;

	Order.create({
		from_airport,
		from_country,
		to_airport,
		to_country,
		total,
		stripe_id,
		Payment_status,
	})
		.then((order) => res.redirect("/app"))
		.catch((err) => console.log(err));
});

module.exports = router;

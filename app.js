const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// Database Connection
const db = require("./config/database");

db.authenticate()
	.then(() => console.log("Database Connected"))
	.catch((err) => console.log("error" + err));

const app = express();

app.get("/", (req, res) => res.send("INDEX"));

const PORT = process.env.port || 5001;

app.listen(PORT, console.log(`server started on ${PORT}`));

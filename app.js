const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();
var eta = require("eta");

// Database Connection
const db = require("./config/database");

db.authenticate()
	.then(() => console.log("Database Connected"))
	.catch((err) => console.log("error" + err));

app.use(express.static(path.join(__dirname, "public")));

app.engine("eta", eta.renderFile);

app.set("view engine", "eta");

app.set("views", path.join(__dirname, "/views"));

app.get("/", function (req, res) {
	res.render("template", {
		favorite: "Eta",
		name: "Ben",
		reasons: ["fast", "lightweight", "simple"],
	});
});

// app.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "public/views/index.html"));
// });
// app.get("/", (req, res) => res.send("i am at server"));

app.use("/app", require("./routes/app.js"));
app.use("/orders", require("./routes/orders.js"));

const PORT = process.env.port || 5001;

app.listen(PORT, console.log(`server started on ${PORT}`));

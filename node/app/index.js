const express = require("express");
const app = express();
const routeHandler = require("./routes/router.js");
const morgan = require("morgan");


app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running", success: true });
});


app.use("/v1/contacts", routeHandler)

module.exports = app;
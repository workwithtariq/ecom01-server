// /server/app.js
const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const laptopRoutes = require("./routes/laptopRoutes");
const phoneRoutes = require("./routes/phoneRoutes");
const gadgetRoutes = require("./routes/gadgetRoutes");

// Middleware to allow cors
// Enable CORS for all routes and origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());
// Middleware to parse JSON bodies
// app.use(bodyParser.json()); // For parsing application/json

// Middleware to parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded


// Use the laptop routes
app.use("/api", laptopRoutes);
app.use("/api", phoneRoutes);
app.use("/api", gadgetRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js Express Server!");
});

module.exports = app;

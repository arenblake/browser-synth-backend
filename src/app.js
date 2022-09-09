if (process.env.USER) require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const sequencerRouter = require("./sequencer/sequencer.router");
const synthRouter = require("./synth/synth.router");

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/sequencer", sequencerRouter);
app.use("/synth", synthRouter);

// Not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;

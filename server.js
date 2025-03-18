require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database..."));

const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);

app.use(express.json());
app.use(helmet());

const dataRouter = require("./routes/dhtData");
app.use("/dhtData", dataRouter);

app.listen(port, () =>
  console.log("Server listening on PORT", port, `\nhttp://localhost:${port}/`)
);

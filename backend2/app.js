const express = require("express");
const cors = require("cors");

const app = express();

/*app.use(
  cors({
    origin: "http://localhost:19010",
  })
);*/
app.use(cors());
app.use("/api", require("./routes"));
app.get("/healthcheck", (req, res) => res.send("Todo está ok"));

module.exports = app;

require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const ColorGroup = require("./models/colors");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const connectToDb = require("./db/connect");
const colors_routes = require("./routes/colors");
const path = require("path");

app.use(cors());
app.use(bodyParser.json());

app.use("/", colors_routes);

app.use("/api/colorGroups", colors_routes);

app.post('/login', colors_routes);


async function startServer() {
  await connectToDb(process.env.MONGODB_URL);

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Error starting the server:", error);
});

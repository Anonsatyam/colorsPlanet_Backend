require("dotenv").config();
const ColorJSON = require("./apiData/apiData.json");
// const SolidColorJSON = require("./apiData/solidColor.json");
// const GradientColorJSON = require("./apiData/gradientColors.json");
const { User, Color, SolidColor, GradientColor } = require("./models/colors");
const connectToDb = require("./db/connect");

const start = async () => {
    console.log("Connected");
  try {
    await connectToDb(process.env.MONGODB_URL);
    console.log("Connected");

    await Color.create(ColorJSON);
    // await SolidColor.create(SolidColorJSON);
    // await GradientColor.create(GradientColorJSON);
    console.log("Data Added To DB Successfully");
  } catch (error) {
    console.log(error);
  }
};

start();
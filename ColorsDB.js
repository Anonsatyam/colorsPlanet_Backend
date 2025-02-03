// This file's code is designed to connect to a MongoDB database and populate it with initial data from predefined JSON files.

// Load environment variables from a .env file
require("dotenv").config();

// Import JSON data for colors, solid colors, and gradient colors
const ColorJSON = require("./apiData/apiData.json");
const SolidColorJSON = require("./apiData/solidColor.json");
const GradientColorJSON = require("./apiData/gradientColors.json");
const BrandColorJSON = require("./apiData/brandsColor.json");

// Import Mongoose models for User, Color, SolidColor, and GradientColor
const { User, Color, SolidColor, GradientColor, BrandColor } = require("./models/colors");

// Import the function to connect to the MongoDB database
const connectToDb = require("./db/connect");

/**
 * Asynchronous function to initialize the database connection and seed it with data.
 */
const start = async () => {
  console.log("Starting the database seeding process...");

  try {
    // Connect to the MongoDB database using the URI from environment variables
    await connectToDb(process.env.MONGODB_URL);
    console.log("Database connected successfully!");

    // Seed the Color collection with data from ColorJSON
    await Color.create(ColorJSON);

    // Seed the SolidColor collection with data from SolidColorJSON
    await SolidColor.create(SolidColorJSON);

    // Seed the GradientColor collection with data from GradientColorJSON
    await GradientColor.create(GradientColorJSON);

    // Seed the BrandColorJSON collection with data from GradientColorJSON
    await BrandColor.create(BrandColorJSON);

    console.log("Data added to the database successfully!");
  } catch (error) {
    // Log any errors that occur during the process
    console.log("Error while seeding the database:", error);
  }
};

// Call the start function to begin the database seeding process
start();

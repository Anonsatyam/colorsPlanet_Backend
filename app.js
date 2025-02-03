// Load environment variables from a .env file
require("dotenv").config();

// Import Mongoose for MongoDB interactions
const mongoose = require("mongoose");

// Import Express to create the server and handle HTTP requests
const express = require("express");

// Import the ColorGroup model (assumes a schema is defined in ./models/colors)
const ColorGroup = require("./models/colors");

// Initialize the Express application
const app = express();

// Import body-parser middleware for parsing JSON request bodies
const bodyParser = require("body-parser");

// Import CORS middleware to enable Cross-Origin Resource Sharing
const cors = require("cors");

// Set the server port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Import the function to connect to the MongoDB database
const connectToDb = require("./db/connect");

// Import routes related to color groups
const colors_routes = require("./routes/colors");

// Import the path module (useful for file and directory path handling)
const path = require("path");

// Middleware to enable CORS for all requests
app.use(cors());

// Middleware to parse incoming JSON request bodies
app.use(bodyParser.json());

// Use the color routes for requests to the root URL
app.use("/", colors_routes);

// Use the color routes for requests to the "/api/colorGroups" URL
app.use("/api/colorGroups", colors_routes);

// Define a POST route for login functionality
app.post('/login', colors_routes);

// Asynchronous function to start the server
async function startServer() {
  // Connect to the MongoDB database using the connection string in .env
  await connectToDb(process.env.MONGODB_URL);

  // Start the server and listen on the specified port
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

// Start the server and handle any errors that occur during startup
startServer().catch((error) => {
  console.error("Error starting the server:", error);
});

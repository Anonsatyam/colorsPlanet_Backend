// Import the Mongoose library to manage MongoDB interactions
const mongoose = require("mongoose");

/**
 * Connect to the MongoDB database using the provided URI.
 * @param {string} uri - The connection string/URI for MongoDB.
 * @returns {Promise} A promise that resolves when the connection is successful and rejects if there's an error.
 */
const connectToDb = (uri) => {
  // Attempt to connect to the database
  return mongoose
    .connect(uri) // Connect using the provided URI
    .then(() => {
      // Log a success message if the connection is established
      console.log("DB Connected Successfully!");
    })
    .catch((error) => {
      // Log an error message if the connection fails
      console.error("Error connecting to the database:", error);
    });
};

// Export the connectToDb function to be used in other parts of the application
module.exports = connectToDb;

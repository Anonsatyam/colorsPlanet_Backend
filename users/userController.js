// Import the Mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Define the User model using Mongoose (assumes a schema is already defined for "User")
const User = mongoose.model("User");

// Import bcryptjs for password hashing
const bcrypt = require("bcryptjs");

// Import jsonwebtoken for generating and verifying JSON Web Tokens (JWTs)
const jwt = require('jsonwebtoken');

/**
 * Function to prepopulate the admin user in the database if it doesn't already exist.
 * This ensures there is always an admin user available for authentication.
 */
const prepopulateAdminUser = async () => {
  try {
    const adminEmail = "admin@example.com"; // Email for the admin user

    // Check if an admin user already exists in the database
    const adminUser = await User.findOne({ email: adminEmail });

    if (!adminUser) {
      // Generate a salt for hashing the password
      const salt = await bcrypt.genSalt(10);

      // Hash the admin's password using bcrypt
      const hash = await bcrypt.hash("Ssingh123#", salt);

      // Create a new admin user document
      const newAdminUser = new User({
        email: adminEmail, // Admin's email
        name: "Admin", // Admin's name
        hash, // Hashed password
        salt // Salt used for hashing
      });

      // Save the admin user to the database
      await newAdminUser.save();

      console.log("Admin user prepopulated."); // Log success message
    }
  } catch (error) {
    console.error("Error prepopulating admin user:", error); // Log any errors during the process
  }
};

// Call the function to prepopulate the admin user when the script runs
prepopulateAdminUser();

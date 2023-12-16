const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// Prepopulate the admin user if it doesn't exist
const prepopulateAdminUser = async () => {
  try {
    const adminEmail = "admin@example.com";
    const adminUser = await User.findOne({ email: adminEmail });
    
    if (!adminUser) {
      const salt = await bcrypt.genSalt(10);

      const hash = await bcrypt.hash("Ssingh123#", salt);
      
      const newAdminUser = new User({
        email: adminEmail,
        name: "Admin",
        hash,
        salt
      });

      await newAdminUser.save();
      console.log("Admin user prepopulated.");
    }
  } catch (error) {
    console.error("Error prepopulating admin user:", error);
  }
};

prepopulateAdminUser();

// Import the Express library to create a router
const express = require("express");

// Create an instance of the Express Router to define routes
const router = express.Router();

// const {getAllcolorPallets, addColorPallets, deleteColorPallete, login, getSolidColors, getGradientColors} = require("../controllers/colors")

// Import specific controller functions for handling color-related routes
const {getAllcolorPallets, getSolidColors, getGradientColors, getBrandColors} = require("../controllers/colors")

// Define a route to retrieve all color palettes
// GET request to "/" will invoke the `getAllcolorPallets` function
router.get("/", getAllcolorPallets);

// Define a route to retrieve all solid colors
// GET request to "/solidColors" will invoke the `getSolidColors` function
router.get("/solidColors", getSolidColors);

// Define a route to retrieve all gradient colors
// GET request to "/gradientColors" will invoke the `getGradientColors` function
router.get("/gradientColors", getGradientColors);

// Define a route to retrieve all brand colors
// GET request to "/brandColors" will invoke the `getBrandColors` function
router.get("/brandColors", getBrandColors);


// router.post("/api/colorGroups", addColorPallets);
// router.post("/login", login);
// router.delete("/api/colorGroups/:id", deleteColorPallete)


// Export the router to use it in the main application file
module.exports = router;

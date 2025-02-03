// Import necessary modules and models
const { User, Color, SolidColor, GradientColor, BrandColor } = require("../models/colors");
const { loginUser } = require("../users/userController");
// Import the bcryptjs library for hashing and comparing passwords
const bcrypt = require("bcryptjs");

// Import the jsonwebtoken library for generating and verifying JSON Web Tokens (JWTs)
const jwt = require("jsonwebtoken");


/**
 * Retrieve all color palettes from the database.
 */
const getAllcolorPallets = async (req, res) => {
  try {
    // Find all documents in the `Color` collection
    const data = await Color.find({});
    res.status(200).json(data); // Respond with the retrieved data
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); // Handle server errors
  }
};

/**
 * Retrieve all gradient colors from the database.
 */
const getGradientColors = async (req, res) => {
  try {
    // Find all documents in the `GradientColor` collection
    const gradientColorData = await GradientColor.find({});
    res.status(200).json(gradientColorData); // Respond with the retrieved gradient colors
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); // Handle server errors
  }
};

/**
 * Retrieve all solid colors from the database.
 */
const getSolidColors = async (req, res) => {
  try {
    // Find all documents in the `SolidColor` collection
    const solidColorData = await SolidColor.find({});
    res.status(200).json(solidColorData); // Respond with the retrieved solid colors
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); // Handle server errors
  }
};

/**
 * Retrieve all solid colors from the database.
 */
const getBrandColors = async (req, res) => {
  try {
    // Find all documents in the `SolidColor` collection
    const brandColorData = await BrandColor.find({});
    res.status(200).json(brandColorData); // Respond with the retrieved solid colors
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); // Handle server errors
  }
};

// const deleteColorPallete = async (req, res) => {
//   const { ids } = req.body;
//   const deletedIds = [];

//   try {
//     for (const id of ids) {
//       // Iterate through color groups and colors to find the matching _id
//       const colorDoc = await Color.findOne({
//         'colorGroups': {
//           $elemMatch: {
//             $elemMatch: { _id: id }
//           }
//         }
//       });

//       if (colorDoc) {
//         // Find and remove the color within the color groups
//         colorDoc.colorGroups.forEach((group, groupIndex) => {
//           const colorIndex = group.findIndex(color => color._id == id);
//           if (colorIndex !== -1) {
//             group.splice(colorIndex, 1); // Remove the color from the group
//             deletedIds.push(id);
//             return;
//           }
//         });

//         // Remove empty arrays from colorGroups
//         colorDoc.colorGroups = colorDoc.colorGroups.filter(group => group.length > 0);

//         // Save the updated document
//         await colorDoc.save();
//       } else {
//         console.log(`Color with ID ${id} not found.`);
//       }
//     }
//     const updatedData = await Color.find({});

//     const response = {
//       message: 'Colors deleted successfully',
//       deletedIds,
//       updatedData,
//     };
    
//     res.status(200).json(response);

//     // res.status(200).json({ message: 'Colors deleted successfully', deletedIds, updatedData });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// const addColorPallets = async (req, res) => {
//   const newColorGroup = req.body;
//   const a = Color.findOne()
//     .sort({ _id: -1 })
//     .exec()
//     .then((latestGroup) => {
//       if (!latestGroup) {
//         return Promise.reject(new Error("No document found"));
//       }
//       latestGroup.colorGroups.unshift(newColorGroup);
//       return latestGroup.save();
//     })
//     .then((updatedGroup) => {
//       res.status(201).json(updatedGroup);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: "Failed to add color groups" });
//     });
// };

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the admin user by email
//     const adminUser = await User.findOne({ email: "admin@example.com" });

//     if (!adminUser) {
//       throw new Error("Admin user not found");
//     }

//     // Compare the provided password with the stored hash
//     const isPasswordMatch = await bcrypt.compare(password, adminUser.hash);

//     if (!isPasswordMatch) {
//       throw new Error("Invalid credentials");
//     }

//     const token = jwt.sign({ userId: adminUser._id }, "your_secret_key", {
//       expiresIn: "1h",
//     });

//     res.json({ message: "Login successful", token });
//   } catch (error) {
//     res.status(401).json({ error: error.message });
//   }
// };

// Export all controller functions
module.exports = {
  getAllcolorPallets,
  // addColorPallets,
  // deleteColorPallete,
  // login,
  getSolidColors,
  getGradientColors,
  getBrandColors
};

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  hash: String,
  salt: String,
});

const colorSchema = new mongoose.Schema({
  colorGroups: [
      {
        name: {
          type: String,
          required: true,
        },
        code: {
          type: String,
          required: true,
          unique: true,
        },
      },
  ],
});

const solidColorSchema = new mongoose.Schema({
  solidColors: [
    {
      name: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
        unique: true,
      },
    },
  ],
});

const gradientColorSchema = new mongoose.Schema({
  gradientColor: [
    {
      code: {
        type: String,
        required: true,
      },
    },
  ],
});

const brandColorSchema = new mongoose.Schema({
  brandColors: [
    {
      name: {
        type: String,
        required: true,
      },
      colors: {
        type: [String], // Array of color codes
        required: true,
      },
    },
  ],
});


const SolidColor = mongoose.model("SolidColor", solidColorSchema);
const GradientColor = mongoose.model("GradientColor", gradientColorSchema);
const BrandColor = mongoose.model("BrandColor", brandColorSchema);
const User = mongoose.model("User", userSchema);
const Color = mongoose.model("Color", colorSchema);

module.exports = { User, Color, SolidColor, GradientColor, BrandColor };

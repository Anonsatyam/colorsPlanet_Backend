const express = require("express");
const router = express.Router();

const {getAllcolorPallets, addColorPallets, deleteColorPallete, login, getSolidColors, getGradientColors} = require("../controllers/colors")

router.get("/", getAllcolorPallets);
router.get("/solidColors", getSolidColors);
router.get("/gradientColors", getGradientColors);
router.post("/api/colorGroups", addColorPallets);
router.post("/login", login);
router.delete("/api/colorGroups/:id", deleteColorPallete)

module.exports = router;

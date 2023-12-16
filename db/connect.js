const mongoose = require("mongoose");

const connectToDb = (uri) => {
  return mongoose.connect(uri)
  .then(() => {
    console.log("DB Connected Successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
};

module.exports = connectToDb;



const mongoose = require("mongoose");

async function mongooseConnectionHandler(url) {
  return await mongoose.connect(url);
}
module.exports = mongooseConnectionHandler;

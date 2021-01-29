const mongoose = require("mongoose");
const Schema = mongoose.mongoose.Schema;

const bootSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true },
});

const Book = mongoose.model("Book", bootSchema);

module.exports = Book;

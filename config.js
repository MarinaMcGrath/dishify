const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds127173.mlab.com:27173/dishify-db`, () => {
  console.log('connected');
});

const userSchema = mongoose.Schema({
  username: { type: String, index: { unique: true } },
  password: String,
});
const User = mongoose.model('User', userSchema);

const favoritesSchema = mongoose.Schema({
  title: String,
  image_url: String,
  source: String,
});
const Favorite = mongoose.model('Recipe', favoritesSchema);

module.exports.Favorite = Favorite;
module.exports.User = User;

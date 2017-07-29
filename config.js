const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds127173.mlab.com:27173/dishify-db`, () => {
  console.log('connected');
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    index: { unique: true },
  },
  password: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favorite' }],
});
const User = mongoose.model('User', userSchema);

const favoritesSchema = mongoose.Schema({
  _user: { type: Number, ref: 'User' },
  title: {
    type: String,
    index: { unique: true },
  },
  image_url: String,
  source: String,
});
const Favorite = mongoose.model('Recipe', favoritesSchema);

module.exports.Favorite = Favorite;
module.exports.User = User;

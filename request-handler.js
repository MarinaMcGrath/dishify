const User = require('./config').User;
const Favorite = require('./config').Favorite;

exports.signupUser = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  user.save((err, saved) => {
    if (err) {
      res.send(err);
    }
    return saved;
  });
  res.send('/homepage');
};

exports.loginUser = (req, res) => {
  User
    .find({ username: req.query.username, password: req.query.password })
    .then((found) => {
      if (found.length === 0) {
        res.send('/signup');
      } else {
        res.send('/homepage');
      }
    });
};

exports.addFavorite = (req, res) => {
  const favorite = new Favorite({
    title: req.body.title,
    image_url: req.body.image_url,
    source: req.body.source,
  });
  favorite.save((err, saved) => {
    if (err) {
      res.send(err);
    }
    return saved;
  });
  res.send('/homepage');
};

exports.getFavorites = (req, res) => {
  Favorite
    .find()
    .then((found) => {
      res.send(found);
    });
};

exports.deleteFavorite = (req, res) => {
  Favorite.findOneAndRemove({ title: req.query.title }, (err, done) => {
    if (err) {
      res.send(err);
    } else {
      res.send(done);
    }
  });
};

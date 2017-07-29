const User = require('./config').User;
const Favorite = require('./config').Favorite;

exports.signupUser = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  user.save((err, saved) => {
    if (err) {
      console.error(err);
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
        console.log('found it', found);
        res.send('/homepage');
      }
    });
};

exports.addFavorite = (req, res) => {
  console.log(req.body);
  const favorite = new Favorite({
    title: req.body.title,
    // image_url: req.body.image_url,
    // source_url: req.body.source_url,
  });
  favorite.save((err, saved) => {
    if (err) {
      console.log(err);
    }
    return saved;
  });
  res.send('/homepage');
};

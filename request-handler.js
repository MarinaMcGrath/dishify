const User = require('./config').User;


exports.signupUser = (req, res) => {
  const user = new User({ username: req.body.username, password: req.body.password });
  user.save((err, saved) => {
    if (err) {
      console.error(err);
    }
    return saved;
  });
  res.end();
};

exports.loginUser = (req, res) => {
  User
    .find({ username: req.body.username, password: req.body.password })
    .then((found) => {
      console.log('found it', found);
      res.redirect('/homepage');
    })
    .catch((err) => {
      res.end(err);
    });
};

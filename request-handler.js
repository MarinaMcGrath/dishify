const User = require('./config').User;


exports.signupUser = (req, res) => {
  const user = new User({ username: req.body.username, password: req.body.password });
  user.save((err, saved) => {
    if (err) {
      console.error(err);
    }
    console.log(saved);
  });
  res.end();
};

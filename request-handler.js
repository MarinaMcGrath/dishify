const User = require('./config').User;


exports.signupUser = function(req, res) {
    let user = new User({username: req.body.username, password:req.body.password});
    user.save((err, user) => {
        if (err) {
            console.error(err);
        }
        console.log('added');
    })
    res.end();
}
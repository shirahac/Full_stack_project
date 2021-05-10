let UserModel = require('../model/user');

let _handleError = function(err){
    console.log("login server error");
    if (err) return console.log(err);
};

module.exports = (app) => {
    app.post('/api/load/login', function(req, res) {
        console.log("login " + req.body.username + req.body.password);
        UserModel
            .findOne({username: req.body.username})
            .then(user => {
                if (user != null) {
                    if (user.password !== req.body.password){
                        res.json({succeed: false, reason: "password", message: 'Incorrect Password. Please try again.'});
                        res.end();
                    }
                    else {
                        console.log("found user "+req.body.username);
                        res.json({succeed: true, user: user});
                        res.end();
                    }
                }
                else {
                    console.log("user does not exist")
                    res.json({succeed: false, reason: "username", message: "User does not exist"});
                }
            }).catch(_handleError);
    });
};

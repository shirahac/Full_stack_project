let UserModel = require('../model/user');

let _handleError = function(err){
    if (err) return console.log(err);
};

// to clear all users:
// UserModel.deleteMany({}, ()=>console.log("done clearing"))


module.exports = (app) => {

    app.get('/api/load/users', function(req, res) {
        console.log('get all the users');
        UserModel
            .find()
            .then(users => {
                res.json(users)
            });
    });


    app.post('/api/add/user', function(req, res) {
        UserModel
            .findOne({username: req.body.username}, function(err, existingUser)
            {
                if (existingUser === null) {
                    console.log("adding new user with name: "+req.body.username
                                             +" and password: " + req.body.password
                                             +" and loc: " + req.body.location);

                    let user= new UserModel({
                        name:     req.body.name,
                        username: req.body.username,
                        password: req.body.password,
                        location: req.body.location,
                        picture:  req.body.picture});
                    user.save(function(err, newUser){
                        if(err)
                            res.json(err);
                        UserModel
                            .find()
                            .then(users => {
                                res.json(users)
                            });
                    });
                }
                else{
                    res.json(null)
                }
            })
    });


    app.post('/api/load/user/username', function (req, res) {
        UserModel.find({username: req.body.username})
            .then(user => {

                if (user === null) {
                    console.log("user is null");
                    res.json({succeed: false, message: "no user found"});
                } else {
                    console.log("user is not null");
                    res.json({succeed: true, users: user});
                }
            }).catch();
    });

}

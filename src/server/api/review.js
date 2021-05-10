let ReviewModel = require('../model/review');
let UserModel = require('../model/user');
let HotelModel = require('../model/hotel');

let _handleError = function(err){
    if (err) return console.log(err);
};

// to clear all:
// ReviewModel.deleteMany({}, ()=>console.log("done clearing"))

module.exports = (app) => {
    app.post('/api/add/review', function(req, res) {
        console.log('add a review for '+ req.body.hotelId
            +" from "+ req.body.user.username);
        UserModel
            .findOne({username: req.body.user.username}).then(
            user => {
                console.log("found user: ");
                console.log(req.body.user.username);
                HotelModel
                    .findOne({_id: req.body.hotelId})
                    .then(
                        hotel =>{
                            ReviewModel
                                .findOneAndDelete({hotelId: hotel.id,
                                    username: req.body.user.username })
                                .then(oldReview =>{
                                    if(oldReview)
                                        console.log('old review was removed!');

                                    let userId = user.id;
                                    let review = new ReviewModel({
                                        username:           req.body.user.username,
                                        userId:             userId,
                                        hotelId:            hotel.id,
                                        hotel:              hotel.name,
                                        creationDate:       req.body.creationDate,
                                        staff:              req.body.ratings.staff,
                                        comfort:            req.body.ratings.comfort,
                                        cleanliness:        req.body.ratings.cleanliness,
                                        freeWiFi:           req.body.ratings.freeWiFi,
                                        facilities:         req.body.ratings.facilities,
                                        valueForMoney:      req.body.ratings.valueForMoney,
                                        location:           req.body.ratings.location,
                                        pictures:           req.body.pictures,
                                    });

                                    review.save(function(err, newReview){
                                        if(err){
                                            console.log(err);
                                            res.json(err);
                                        }

                                        else
                                            res.json({succeed: true})
                                    });
                                })
                        }).catch(_handleError);
            }).catch(_handleError);
    });

    app.post('/api/load/hotel/reviews', function(req, res){
        if(req.body.hotel){
            ReviewModel.find({hotelId: req.body.hotel.id})
                .then(reviews =>{
                    res.json(reviews)
                }).catch(_handleError);
        }});

    app.get('/api/load/reviews', function(req, res) {
        console.log('get all reviews');
        ReviewModel
            .find()
            .then(reviews => {
                res.json(reviews)
            });
    });

}
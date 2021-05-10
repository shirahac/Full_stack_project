let HotelModel = require('../model/hotel');
let ReviewModel = require('../model/review');
let ObjectId = require('mongodb').ObjectId;

let _handleError = function(err){
    if (err) return console.log(err);
};

// to clear all:
// HotelModel.deleteMany({}, ()=>console.log("done clearing"))

function getAvgReviewScore(review){
    return (review.staff
        + review.comfort
        + review.cleanliness
        + review.freeWiFi
        + review.facilities
        + review.valueForMoney
        + review.location)
        / 7
}

function getAvgRestaurantScore(reviews) {
    return reviews.length ?
        reviews.reduce((acc, curr) => acc
            + getAvgReviewScore(curr),0) / reviews.length
        : 0
}

module.exports = (app) => {
    
    app.get('/api/load/hotels', function(req, res) {
        console.log('get all the hotels');
        ReviewModel.find({})
        .then(reviews =>{
            HotelModel
            .find({})
            .then(hotels => {
                fixedRest = hotels.map(hotel => {
                    return {
                        id: hotel.id,
                        name: hotel.name,
                        location: hotel.location,
                        picture: hotel.picture,
                        link: hotel.link,
                        avgScore: getAvgRestaurantScore(reviews.filter(rev => rev.hotelId == hotel.id)),
                    }
                });
            res.json(fixedRest)
            })     
        })
    });

    app.post('/api/update/hotel', function(req, res) {
        console.log('updating hotels');
        HotelModel
            .findOne({name: req.body.name, location: req.body.location}, function(err, existingHotel)
            {
                if (existingHotel === null) {
                    console.log("adding new hotel with name: "+req.body.name
                    +" and loc: " + req.body.location);
                    let hotel= new HotelModel({
                        name: req.body.name,
                        location: req.body.location,
                        link: req.body.link,
                        picture: req.body.picture});
                    hotel.save(function(err, newHotel){
                        if(err)
                            res.json(err);
                        HotelModel
                            .find()
                            .then(hotels => {
                                res.json({succeed: true, hotels: hotels});
                            });
                        });
                
                }
                else{
                    res.json({succeed: false})
                }
            })

    });

    app.post('/api/load/hotel_by_id', function(req, res) {
        HotelModel
            .findOne(ObjectId(req.body.hotelId), function(err, existingHotel){
                if (existingHotel !== null) {
                    console.log("send back hotel: "+existingHotel.name);
                    res.json({succeed: true, hotel: existingHotel});
                }
            })
    });
};




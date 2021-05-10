let LocationModel = require('../model/location');

let _handleError = function(err){
    if (err) return console.log(err);
};
LocationModel.deleteMany({}, ()=>console.log(""))

let telAviv = new LocationModel({
    name: 'Tel Aviv',
    distanceFromTelAviv: 0,
    distanceFromEilat: 349,
    distanceFromRehovot: 21,
    distanceFromAshdod: 42,
    distanceFromNazareth: 106,
    distanceFromHaifa: 95,
    distanceFromJerusalem: 62,
    distanceFromBeerSheva: 103,
     });

let rehovot = new LocationModel({
    name: 'Rehovot',
    distanceFromRehovot: 0,
    distanceFromEilat: 327,
    distanceFromTelAviv:21,
    distanceFromAshdod: 24,
    distanceFromNazareth: 121,
    distanceFromHaifa: 111,
    distanceFromJerusalem: 59,
    distanceFromBeerSheva: 82,
     });


let eilat = new LocationModel({
    name: 'Eilat',
    distanceFromEilat: 0,
    distanceFromRehovot: 327,
    distanceFromTelAviv: 349,
    distanceFromAshdod: 328,
    distanceFromNazareth: 417,
    distanceFromHaifa: 439,
    distanceFromJerusalem: 323,
    distanceFromBeerSheva: 246,
     });

let ashdod = new LocationModel({
    name: 'Ashdod',
    distanceFromAshdod: 0,
    distanceFromRehovot: 24,
    distanceFromTelAviv: 42,
    distanceFromEilat: 328,
    distanceFromNazareth: 142,
    distanceFromHaifa: 132,
    distanceFromJerusalem: 71,
    distanceFromBeerSheva: 82,
     });

let haifa = new LocationModel({
    name: 'Haifa',
    distanceFromHaifa: 0,
    distanceFromRehovot: 111,
    distanceFromTelAviv: 95,
    distanceFromEilat: 439,
    distanceFromNazareth: 40,
    distanceFromAashdod: 132,
    distanceFromJerusalem: 145,
    distanceFromBeerSheva: 193,
     });

let nazareth = new LocationModel({
    name: 'Nazareth',
    distanceFromNazareth: 0,
    distanceFromRehovot: 121,
    distanceFromTelAviv: 106,
    distanceFromEilat: 417,
    distanceFromHaifa: 40,
    distanceFromAshdod: 142,
    distanceFromJerusalem: 142,
    distanceFromBeerSheva: 203,
     });

let jerusalem = new LocationModel({
    name: 'Jerusalem',
    distanceFromJerusalem: 0,
    distanceFromRehovot: 59,
    distanceFromTelAviv: 62,
    distanceFromEilat: 323,
    distanceFromHaifa: 145,
    distanceFromAshdod: 71,
    distanceFromNazareth: 142,
    distanceFromBeerSheva: 89,
     });

let beerSheva = new LocationModel({
    name: 'Beer Sheva',
    distanceFromBeerSheva: 0,
    distanceFromJerusalem: 89,
    distanceFromRehovot: 82,
    distanceFromTelAviv: 103,
    distanceFromEilat: 246,
    distanceFromHaifa: 193,
    distanceFromAshdod: 82,
    distanceFromNazareth: 203,
     });

telAviv.save(function (err, telAviv) {
    if (err) return console.log(err);
});

rehovot.save(function (err, rehovot) {
    if (err) return console.log(err);
});
eilat.save(function (err, eilat) {
    if (err) return console.log(err);
});
    
ashdod.save(function (err, ashdod) {
    if (err) return console.log(err);
});
    
haifa.save(function (err, haifa) {
    if (err) return console.log(err);
});
    
nazareth.save(function (err, nazareth) {
    if (err) return console.log(err);
});

jerusalem.save(function (err, jerusalem) {
    if (err) return console.log(err);
});

beerSheva.save(function (err,beerSheva) {
    if (err) return console.log(err);
});



module.exports = (app) => {
    app.get('/api/load/locations', function(req, res) {
        console.log('get all the locations');
        LocationModel
            .find()
            .then(locations => {
                res.json(locations)
            }).catch(_handleError);
    });
};
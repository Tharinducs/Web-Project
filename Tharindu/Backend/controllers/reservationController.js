const express = require('express');
var router = express.Router();

var  Reservation  = require('../models/reservation');

router.get("/", function (req, res) {
    Reservation.findAll(function (err, reservations) {
        if(err) throw err;

        if (!reservations){
            res.json({state:false,msg:"No reservations found"});
        }

        if(reservations){
            res.json(reservations);
        }

    })
});

router.post("/create",function (req,res) {
    const newReservation = new Reservation({
        date: req.body.date,
        from: req.body.from,
        to: req.body.to,
        lab: req.body.lab,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        year: req.body.year,
        reason: req.body.reason,
        state: "Not Comfirm"
    });

    Reservation.saveReservation(newReservation, function (err, reservation) {
        if (reservation) {
            res.send(reservation);
        }

        else {
            console.log('Error in User save :' + JSON.stringify(err, undefined, 2));
        }
    });

});

router.get('/notComfirmed', function (req, res) {
    Reservation.findNotComfirmed(function (err, reservations) {
        if(err) throw err;

        if (!reservations){
            res.json({state:false,msg:"No reservations found"});
        }

        if(reservations){
            res.json(reservations);
        }

    })
});

router.post('/confirm', function(req, res){
    const _id= req.body._id;
    Reservation.updateReservation(_id, function (err, reservation) {
        if(err) throw err;

        if (!reservation){
            res.json({state:false,msg:"Something went wrong"});
        }

        if(reservation){
            res.json(reservation);
        }
    })
});

router.post('/remove', function(req, res){
    const _id= req.body._id;
    Reservation.remove(_id, function (err, reservation) {
        if(err) throw err;

        if (!reservation){
            res.json({state:false,msg:"Something went wrong"});
        }

        if(reservation){
            res.json(reservation);
        }
    })
});


module.exports = router;
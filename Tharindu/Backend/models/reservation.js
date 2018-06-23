const mongoose = require('mongoose');
var DateOnly = require('dateonly');
const schema = mongoose.Schema;

const reservationSchema = new schema({
    date:{type:String, required:true},
    from:{type:String, reason:true},
    to:{type:String, required:true},
    lab:{type:String, required:true},
    name:{type:String, required:true},
    email:{type:String, required:true},
    role:{type:String, required:true},
    year:{type:String},
    reason:{type:String, required:true},
    state:{type:String, required:true},
});

const Reservation = module.exports= mongoose.model("Reservation",reservationSchema );

module.exports.saveReservation = function (newReservation, callback) {
    newReservation.date=new DateOnly(newReservation.date);
    newReservation.save(callback);
}


module.exports.findBYDateAndTime = function(date, time, lab, callback){
    const query = {date:date,time:time, lab:lab};
    Reservation.findOne(query,callback);
}

module.exports.findNotComfirmed= function (callback) {
    const query = {state: "Not Comfirm"};
    Reservation.find(query, callback);
}

module.exports.updateReservation = function (id, callback) {
    var reservation ={
        state: "Confirmed"
    }
    Reservation.findByIdAndUpdate(id, { $set: reservation}, {new: true}, callback) ;
}

module.exports.remove = function (_id, callback) {
    Reservation.findByIdAndRemove(_id, callback);
}

module.exports.findAll = function (callback) {
    const query = {state: "Confirmed"};
    Reservation.find(query,null, {sort: {date: 1}} , callback);
}
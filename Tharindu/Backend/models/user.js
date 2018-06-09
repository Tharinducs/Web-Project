const mongoose = require('mongoose');
const schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

const userSchema = new schema({
    username:{type:String, required:true},
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},

});

const User = module.exports= mongoose.model("User", userSchema);

module.exports.saveUser = function (newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            if(err){
                throw err;
            }

            else{
                newUser.save(callback);
            }
        });
    });
};

module.exports.passwordCheck = function (plainpassword, hash, callback) {
    bcrypt.compare(plainpassword, hash, function(err, res) {
        if(err){
            throw err;
        }

        else{
            callback(null, res);
        }
    });
};


module.exports.findByEmail = function (email,callback) {
    const query = {email:email};
    User.findOne(query,callback);


};

module.exports.findUserbyId = function (id, callback) {
    User.findOne(id,callback);
}


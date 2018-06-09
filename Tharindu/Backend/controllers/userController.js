const express = require('express');
var router = express.Router();

var  User  = require('../models/user');
var jwt = require('jsonwebtoken');
const config = require('../db');
const passport =require('passport');


router.post("/register",function (req,res) {
    const newUser = new User({
        username: req.body.username,
        name:  req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    User.saveUser(newUser, function (err,user) {
        if(!err){
            res.send(user);
        }

        else{
            console.log('Error in User save :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post("/login", function (req, res) {
    const email=req.body.email;
    const password = req.body.password;

    User.findByEmail(email, function (err, user) {
        if(err){
            throw err;
        }
        if(user){
            User.passwordCheck(password, user.password, function (err, match) {
                if(err){
                    console.log("No matching");
                }

                if(match){
                    const token = jwt.sign(user, config.secret,{expiresIn:86400*3});
                    res.json(
                        {
                            state:true,
                            token:"JWT " + token,
                            user:{
                                id:user._id,
                                name:user.name,
                                username:user.username,
                                email:user.email

                            }
                        }
                    )

                }
            });

        }



    });
});

router.get('/profile', passport.authenticate('jwt', { session: false}), function(req, res) {
        res.json({user:req.user});
    }
);


module.exports = router;
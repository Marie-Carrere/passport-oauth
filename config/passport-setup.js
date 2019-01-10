const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
    new GoogleStrategy({
        //options for the Google Strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //check if user already exists in database
        User.findOne({googleid: profile.id}).then((currentUser) => {
            if(currentUser) {
                console.log('user is: ', currentUser);
            } else {
                new User({
                    username: profile.displayName,
                    googleid: profile.id
                }).save().then((newUser) => {
                    console.log('new user created:' + newUser);
                });
            }
        });
    })
)

const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

// Set Up view engine 
app.set('view engine', 'ejs');

// Connect to mongoDB
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('Connected to mongoDB');
});

// Set Up routes
app.use('/auth', authRoutes);

// Create Home route 
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

// Set Up view engine 
app.set('view engine', 'ejs');

// Set Up routes
app.use('/auth', authRoutes);

// Create Home route 
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
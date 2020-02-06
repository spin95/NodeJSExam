const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/socksdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to socks DB...'))
    .catch(err => console.log(`Error connecting to db : ${err}`));

//Exporting all models
module.exports.Sock = require('./bike');
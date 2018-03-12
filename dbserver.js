
const mongoose = require('mongoose');
//var sha512 = require('js-sha512');


var db = {
    mongoose:mongoose,
    Mongoose: mongoose.connect('mongodb://localhost/sicohodb')
};


module.exports = db;

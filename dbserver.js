
const mongoose = require('mongoose');
//var sha512 = require('js-sha512');


var db = {
    Mongoose:mongoose,
    mongoose: mongoose.connect('mongodb://localhost/test')
};


module.exports = db;

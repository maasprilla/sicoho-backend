var db = require('./dbserver');

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var routes = require("./routes/routes.js");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

var port = process.env.PORT || 8091;        // set our port

db.mongodb.then(
	() => {
		console.log('bien');
		var server = app.listen(port, function () {
			console.log("app running on port.", server.address().port);
		});
	},
	err => {
		console.log('mal');
	}
);


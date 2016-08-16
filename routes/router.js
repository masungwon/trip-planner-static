var express = require('express');
var router = express.Router();
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Activity = require('../models/activity');
var Restaurant = require('../models/restaurant');
var Promise = require('bluebird');
module.exports = router;


router.get('/', function(request, response, next) {
	var promiseHotels = Hotel.findAll();
	var promiseRestaurants = Restaurant.findAll();
	var promiseActivities = Activity.findAll();

	Promise.all([
		promiseHotels,
		promiseRestaurants,
		promiseActivities
	])
	.spread(function(hotels, restaurants, activities) {
		response.render('index', {
			temphotels: hotels,
			temprestaurants: restaurants,
			tempactivities: activities
		})
	})
	.catch(next);
});

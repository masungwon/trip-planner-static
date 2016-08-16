var Sequelize = require('sequelize');
// var Promise = require('bluebird');
var db = require('./_db');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	num_stars: {
		type: Sequelize.INTEGER,
		min: 1,
		max: 5
	},
	amenities: {
		type: Sequelize.STRING
	}
});

module.exports = Hotel;
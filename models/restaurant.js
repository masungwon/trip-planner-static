var Sequelize = require('sequelize');
var db = require('./_db');

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING,
		// get: function() {
		// 	var cuisineArr = this.dataValues.cuisine;
		// 	return cuisineArr.join(', ');
		// }
	},
	price: {
		type: Sequelize.INTEGER,
		min: 1,
		max: 5
	}
});

module.exports = Restaurant;
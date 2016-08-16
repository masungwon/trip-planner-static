// var sequelize = require('sequelize');
// var Promise = require('bluebird');
var db = require('./_db');
var Activity = require('./activity');
var Hotel = require('./hotel');
var Place = require('./place');
var Restaurant = require('./restaurant');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = db;


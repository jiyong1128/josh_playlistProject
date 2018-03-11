'use strict';
const Sequelize = require('sequelize')
const db = require('../index');
const Singers = require('./singer')
const Songs = require('./song')



Singers.belongsTo(Songs) // Singer will get song id

module.exports = {
	db,
    Singers,
    Songs
}

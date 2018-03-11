'use strict';
const Sequelize = require('sequelize')
const db = require('../index');
const Playlists = require('./playlist')
const Songs = require('./song')



// Playlist.belongsTo(Songs) // playlist will get song id

module.exports = {
	db,
    Playlists,
    Songs
}

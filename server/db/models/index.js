'use strict';
const Sequelize = require('sequelize')
const db = require('../index');
const Playlists = require('./playlist')
const Songs = require('./song')



// Playlists.belongsToMany(Songs) // playlist will get song id

// Songs.belongsTo(Playlists);
// Playlists.hasMany(Songs);

Songs.belongsToMany(Playlists, {through: 'songlists'}) // methods on 
Playlists.belongsToMany(Songs, {through: 'songlists'})  // find songs through songlist 
// just 1 join table
// plural gets for both associations.

// user has many puppy, puppy can belong to one user.
// find all puppies by user
module.exports = {
	db,
    Playlists,
    Songs
}

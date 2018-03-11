const Sequelize = require('sequelize');
const db = require('../index')

const Songs = db.define('songs', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    artist: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING
    },
    lyrics: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comments: {
        type: Sequelize.STRING
    }
})

module.exports = Songs

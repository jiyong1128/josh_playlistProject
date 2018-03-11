const Sequelize = require('sequelize');
const db = require('../index')

const Songs = db.define('songs', {
    genre: {
        type: Sequelize.STRING,
        allowNull: false
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

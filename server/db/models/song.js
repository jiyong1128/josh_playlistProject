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
        type: Sequelize.TEXT,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING  // img??
    },
    duration: {
        type: Sequelize.INTEGER
    },
    rating: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0,
            max: 5
        }
    }
})

module.exports = Songs

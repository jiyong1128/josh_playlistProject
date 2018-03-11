const Sequelize = require('sequelize');
const db = require('../index');

const Playlist = db.define('playlist',  {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0,
            max: 5
        }
    },
    duration: {
        type: Sequelize.DECIMAL
    },
    img: {
        type: Sequelize.STRING  // img??
    }
}, {
    getterMethods: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }
})

module.exports = Playlist

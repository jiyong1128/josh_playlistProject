const Sequelize = require('sequelize');
const db = require('../index');

const Singers = db.define('singer',  {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Singers

const express = require('express')
const router = express()
const { Songs, Playlists } = require('../db/models')

router.get('/', (req, res, next) => {
    Songs.findAll({})
    .then(data => res.json(data))
})


module.exports = router
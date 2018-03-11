const express = require('express')
const router = express()
const { Song, Playlists } = require('../db/models')
router.get('/', (req, res, next) => {
    Playlist.findAll({})
    .then(data => res.json(data));
})

module.exports = router;
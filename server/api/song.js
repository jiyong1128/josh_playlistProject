const express = require('express')
const router = express()
const { Songs, Playlists } = require('../db/models')

router.get('/', (req, res, next) => {
    Songs.findAll({include: [{all: true}]})
    .then(data => res.json(data))
    .catch(next)
})
router.get('/:id', (req, res, next) => {
    Songs.findById(req.params.id)
    .then(data => res.json(data))
    .catch(next)
})

router.post('/', (req, res, next) => {
    let addSong;
    Songs.create(req.body)
    .then(createdSong => {
        addSong = createdSong
        const {playlistId} = req.body
        return createdSong.addPlaylist(playlistId)
    })
    .then(_ => res.json(addSong))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
    Songs.destroy({
        where: {
            id: req.params.id
        }
    }).then(deleted => res.status(204).json(deleted))
    .catch(next)
})

module.exports = router
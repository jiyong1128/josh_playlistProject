const express = require('express')
const router = express()
const { Songs, Playlists } = require('../db/models')

router.get('/', (req, res, next) => {
    Playlists.findAll({include: [{all: true}]})
    .then(data => res.json(data))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Playlists.findById(req.params.id)
    .then(data => res.json(data))
    .catch(next)
})

router.post('/', (req, res, next) => {
    let addPlaylist;
    Playlists.create(req.body)
    .then(playlist => {
        addPlaylist = playlist;
        const {songId} = req.body
        return playlist.addSong(songId)
    })
    .then(_ => res.json(addPlaylist))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
    Playlists.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => res.status(204).json(data))
    .catch(next);
})

router.put('/:id', (req, res, next) => {
    let playlistWithSongId;
    console.log(req.body, 'req.body inside of put request')
    Playlists.findById(req.params.id)
    .then(playlistToUpdate => {
        return playlistToUpdate.update(req.body)
    })
    .then(updatedPlaylist => {
        playlistWithSongId = updatedPlaylist;
        return Songs.findById(req.body.songId)
    })
    .then(songIdToUpdate => {
        playlistWithSongId.addSong(songIdToUpdate)
        res.json(playlistWithSongId)
    })
    .catch(next);
})

module.exports = router;
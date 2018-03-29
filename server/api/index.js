'use strict'
const router = require('express').Router()
const db = require('../db')
// const Playlist = require('./playlist')
// const Song = require('./song')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
// router.get('/hello', (req, res) => res.send({hello: 'world'}))

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = router;


router.use('/playlists', require('./playlist'));
router.use('/songs', require('./song'));

router.use((req, res, next) => {
	res.status(404).send('Not found');
});
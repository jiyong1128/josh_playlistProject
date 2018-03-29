const db = require('./server/db');
const Songs = require('./server/db/models/song');
const Playlists = require('./server/db/models/playlist');

const songs = [
    { title: 'Hello', artist: 'Beyonce', genre: 'pop', lyrics: "hello my name is Beyonce" },
    { title: 'Despacito', artist: 'Justin Beaver', genre: 'pop', lyrics: "hello my name is Justin" },
    { title: 'i do not know', artist: 'Beyonce', genre: 'pop', lyrics: "hello my name is Hello" },
    { title: 'time to say goodbye', artist: 'Joshua', genre: 'Kpop', lyrics: "hello my name is Joshua" },
  ];
  
  // const id = () => Math.round(Math.random() * (songs.length - 1)) + 1;

  const playlists = [
    { name: 'Beyonce blank'},
    { name: 'Justin'},
    { name: 'Joshua'},
];


  const seed = () =>
  Promise.all(songs.map(song =>
    Songs.create(song))
  )
  .then(() =>
  Promise.all(playlists.map(playlist =>
    Playlists.create(playlist))
  ))


  const main = () => {
    console.log('Syncing db...');
    db.sync({})
      .then(() => {
        console.log('Seeding databse...');
        return seed();
      })
      .catch(err => {
        console.log('Error while seeding');
        console.log(err.stack);
      })
      .then(() => {
        db.close();
        return null;
      });
  };
  main();
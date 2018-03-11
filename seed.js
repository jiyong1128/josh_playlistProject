const db = require('./server/db');
const Songs = require('./server/db/models/song');
const Playlists = require('./server/db/models/playlist');

const songs = [
    { title: 'Hello', artist: 'Beyonce', genre: 'pop', lyrics: "hello my name is Beyonce", comments: 'very skilled singer'},
    { title: 'Despacito', artist: 'Justin Beaver', genre: 'pop', lyrics: "hello my name is Justin", comments: 'very handsome'},
    { title: 'i do not know', artist: 'Beyonce', genre: 'pop', lyrics: "hello my name is Hello", comments: 'very skilled singer'},
    { title: 'time to say goodbye', artist: 'Joshua', genre: 'Kpop', lyrics: "hello my name is Joshua", comments: 'very skilled korean singer'}
  ];
  
  // const id = () => Math.round(Math.random() * (songs.length - 1)) + 1;

  const playlists = [
    { firstName: 'Beyonce', lastName: 'blank', rating: 4.5, duration: 4.35},
    { firstName: 'Justin', lastName: 'Beaver', rating: 3.5, duration: 3.35},
    { firstName: 'Joshua', lastName: 'Park', rating: 2.5, duration: 4.15},
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
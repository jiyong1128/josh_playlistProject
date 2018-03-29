import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';
import Playlist from './components/Playlist';
//initial state
const initialState = {
    playlists: [],
    playlist: {},
    songs: [],
    song: {}
}

// action types

const GET_PLAYLISTS = 'GET_PLAYLISTS';
const GET_PLAYLIST = 'GET_PLAYLIST';
const GET_SONGS = 'GET_SONGS';
const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
const UPDATE_PLAYLIST = "UPDATE_PLAYLIST";
// action creators

export function getPlaylists(playlists) {
    const action = {type: GET_PLAYLISTS, playlists};
    return action;
}
export function createPlaylist(playlist) {
    const action = { type: CREATE_PLAYLIST, playlist };
    return action;
}
export function getSongs(songs) {
  const action = {type: GET_SONGS, songs};
  return action
}
export function updatePlaylist(playlist) {
  const action = {type: UPDATE_PLAYLIST, playlist}
  return action
}
// thunks

export function fetchPlaylists() {
    return function thunk(dispatch) {
        return axios.get(`/api/playlists`)
        .then(res => res.data)
        .then(playlists => {
            const action = getPlaylists(playlists);
            dispatch(action)
        })
    }
}

export function fetchSongs() {
  return function thunk(dispatch) {
    return axios.get(`/api/songs`)
    .then(res => res.data)
    .then(songs => {
      const action = getSongs(songs)
      dispatch(action)
    })
  }
}

export function createPlaylists(playlist) {
    return function thunk(dispatch) {
      // console.log('dispatch', playlist)
      return axios.post('/api/playlists', playlist)

        .then(res => {
          return res.data
        })
        .then(newPlaylist => {
          const action = createPlaylist(newPlaylist);
          dispatch(action);
          dispatch(fetchPlaylists());
          return newPlaylist
        });
    }
  }
  
  export function updateOnePlaylist(id, songId) {
    return function thunk(dispatch) {
      console.log('hehe', songId)
      return axios.put(`/api/playlists/${id}`, songId)
      .then(res => {
        console.log('hitting')
        return res.data
      })
      .then(updatedPlaylist => {
        console.log(updatedPlaylist)
        const action = updatePlaylist(updatedPlaylist)
        dispatch(action)
        dispatch(fetchSongs())
        return updatedPlaylist
      })
    }
  }

// reducers

function reducer(state = initialState, action) {
  // console.log('reducer')
    switch(action.type) {
        case GET_PLAYLISTS:
          return Object.assign({}, state, {playlists: state.playlists.concat(action.playlists)})
        case CREATE_PLAYLIST:
          return Object.assign({}, state, { playlist: [...state.playlist, action.playlist] });
        case GET_SONGS:
          return Object.assign({}, state, {songs: state.songs.concat(action.songs)})
        case UPDATE_PLAYLIST:
        console.log(state.playlist)
          return Object.assign({}, state, {playlist: state.playlists.map(playlist => {
            if (playlist.id === action.playlist.id) {
              return action.playlist
            } else {
              return playlist
            }
          })
        })
        default:
          return state
    }
}





const store = createStore(
  reducer, applyMiddleware(thunkMiddleware)
);

export default store;

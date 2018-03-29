import React, {Component} from 'react'
import store, {fetchSongs, fetchPlaylists} from '../store'
import SonglistForm from './SonglistForm'


export default class Song extends Component {
    constructor(props) {
        super(props) 
        this.state = store.getState()
    }

    componentDidMount() {
        store.dispatch(fetchSongs())
        store.dispatch(fetchPlaylists())
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        // console.log(this.state)
        return (
            <div>
            <h1> All the Songs </h1>
            <table className="table">
            <tbody>
            <tr>
            <th>id</th>
            <th>title</th>
            <th>artist</th>
            <th>genre</th>
            <th>Playlist</th>
            <th>Add to Playlist</th>
            </tr>
            {
                this.state && this.state.songs.map(song => {
                    return (
                        <tr key={song.id}>
                        <th>{song.id}</th>
                        <th>{song.title}</th>
                        <th>{song.artist}</th>
                        <th>{song.genre}</th>
                        <th>{(song.playlists[0]) ? song.playlists[0].name : null}</th>
                        <th><SonglistForm playlists={this.state} id={song.id} /></th>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
            </div>
        )
    }
}
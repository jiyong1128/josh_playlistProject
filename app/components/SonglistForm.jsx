import React, {Component} from 'react'
import store, {updateOnePlaylist} from '../store'
export default class SonglistForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songId: '',
            playlistId: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        // console.log(event)
        // console.log(event)
        this.setState({playlistId: event.target.value})
        // console.log('handleChange', this.state)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        const playlistId = Number(this.state.playlistId.split('.')[0])
        const songId = Number(this.props.id)
        // console.log(playlistId)
        // console.log(songId)
        this.setState({songId: songId})
        // console.log(songId)
        // console.log(playlistId)
        
        store.dispatch(updateOnePlaylist(playlistId, songId))
        // console.log(Number(this.state.playlistId.slice(0,] 1)))
        
    }
    
    render() {

        // console.log(this.props.playlists.songs)
        // const id = this.state.playlistId.slice(0, 1)
        // console.log(this.props)
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <select value={this.state.playlistId}  onChange={this.handleChange} >
                {
                    this.props.playlists.playlists.map(playlist => {
                        return (
                            <option key={playlist.id} name="name">{playlist.id}. {playlist.name} </option> 
                    )
                    
                }) 
                
            }
            </select>
            <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}
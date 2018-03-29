import React, {Component} from 'react';
import store, {fetchPlaylists} from '../store';
import { Link } from 'react-router-dom'
// import PlaylistSearchTag from './PlaylistSearchTag'
import PlaylistForm from './PlaylistForm'
export default class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()

    }
    componentDidMount() {
        store.dispatch(fetchPlaylists())
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    // handleChange(event) {
    //     this.setState({ [evt.target.name]: evt.target.value })
    // }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div>
            <h1> All the Playlists </h1>
            <table className="table">
            <tbody>
            <tr>
            <th>Name</th>
            </tr>
            {
                this.state && this.state.playlists.map(playlist => {
                    return (
                        <tr key={Number(playlist.id)}>
                        <th>{playlist.name}</th>
                        <th><Link to={`/playlist/${playlist.id}`}> click to see all the songs </Link></th> 
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
            <PlaylistForm state={this.state} history={this.props.history} />
            </div>
        )
    }
}
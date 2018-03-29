import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
            <h1> Josh_Playlists</h1>
            <nav>
                <li><Link to="/Playlists">All Playlists</Link></li>
                <li><Link to="/Songs">All Songs</Link></li>
            </nav>
            </div>
        )
    }
}

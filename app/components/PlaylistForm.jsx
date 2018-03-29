import React, {Component} from 'react';
import store, {createPlaylists} from '../store';

export default class PlaylistForm extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        songId: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
    handleChange(evt) {
      this.setState({ [evt.target.name]: evt.target.value })
    }
  
    handleSubmit(event) {
      event.preventDefault();
      store.dispatch(createPlaylists(this.state))
    //   .then(data => {
    //     this.props.history.push('/playlists/')
    //   })
  
      this.setState({
        name: '',
        songId: ''
      })
    }
    render() {
      // console.log(this.state)
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  name="name"
                  type="name"
                  value={this.state.name}
                  placeholder="Enter Name"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label>Songid</label>
                <input
                  name="songId"
                  type="songId"
                  placeholder="enter songId"
                  value={this.state.songId}
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button type="submit">Create Playlist</button>
            </form>
          </div>
        );
      }
    }
    
// import React, {Component} from 'react'
// import Playlist from './Playlist'
// import FindArtist from './FindArtist'

// export default class PlaylistSearchTag extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             inputValue: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(event) {
//         const value = event.target.value
//         this.setState = ({
//             inputValue: value
//         })
//     }


//     render() {
//         const inputValue = this.state.inputValue;
//         console.log(this.props.playlists)
//         const playlists = this.props.playlists
//         if (playlists) var filteredPlaylist = this.props.playlists.filter(playlist =>
//       playlist.name.match(inputValue));

//         return (
//             <div>
//                 <FindArtist
//                 handleChange={this.handleChange}
//                 inputValue={inputValue}
//                 />
//                 <Playlist artists={filteredPlaylist} />
//             </div>
            
//         )
        
//     }
// }
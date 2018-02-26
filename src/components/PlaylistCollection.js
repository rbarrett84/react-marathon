import React from 'react';
import Playlist from './Playlist'

class PlaylistCollection extends React.Component{
  constructor(props){
    super(props);
  }

  render() {

    let playlists = this.props.playlists.map(list => {
      let className;
      if (list.id === this.props.selectedPlayListId) {
        className = "selected"
      }
    })

    let playlistClick = () => {
        this.props.handlePlaylistSelect(list.id)
      }

    return(
        <Playlist
          key={list.id}
          name={list.name}
          songs={list.songs}
          className={className}
          onClick={playlistClick}
        />
      )
    return(
        <ul>
          { playlists }
        </ul>
      )
    }
  }


export default PlaylistCollection;

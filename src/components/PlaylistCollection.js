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
  }

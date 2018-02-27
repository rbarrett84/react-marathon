import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div>
      <div className="App row">
        <h1>This is the Playlist Portion of our App</h1>
        <PlayListCollection
          playlist={data.playlist}
        />
      </div>

      <div className="small-6 columns">
        <h1>This is the song list portion of our App!</h1>
        <SongCollection
          songs={selectedPlaylistSongs}
          selectedSongId={this.state.selectedSongId}
          handleSongSelect={this.handleSongSelect}
        />
      </div>
    </div>
    );
  }
}

export default App;

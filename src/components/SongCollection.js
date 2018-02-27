import React from "react"
import Song from "./Song"

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let songs = this.props.songs.map((singleSong) => {
      let className;
      if (singleSong.id === this.props.selectedSongId) {
        className = 'selected'
      }
      let handleSelected = () =>{
        this.props.handleSongSelect(singleSong.id);
      }

      return (
        <Song
          key={singleSong.id}
          id={singleSong.id}
          album={singleSong.album}
          artist={singleSong.artist}
          name={singleSong.name}
          className={className}
          handleSelected={handleSelected}

        />
      )
    })


    return (
      <ul>
        {songs}
      </ul>
    )
  }

}

export default SongCollection

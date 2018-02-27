import React from "react"
import Song from "./Song"

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let songs = this.props.songs.map((oneSong) => {
      let className;
      if (oneSong.id === this.props.selectedSongId) {
        className = 'selected'
      }
      let handleSelected = () =>{
        this.props.handleSongSelect(oneSong.id);
      }

      return (
        <Song
          key={oneSong.id}
          id={oneSong.id}
          album={oneSong.album}
          artist={oneSong.artist}
          name={oneSong.name}
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

import React from 'react';
import Sound from 'react-sound';

class PlayList extends React.Component {

  render() {

    return (
      <div>
        <p>Current Playlist:</p>
        <div>
        {this.props.songs.map(e => (
          <img
             className="img-thumbnail"
             height="50"
             width="50"
             onClick={()=>(this.props.onSongChange(e))}
             src={e.artwork_url ?
               e.artwork_url :
               '../dist/girl-smiley-face.png'}
             />
          ))}
        </div>
        </div>
        )
  }
}

module.exports = PlayList
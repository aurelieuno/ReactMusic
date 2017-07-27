import React from 'react';
import ClassNames from 'classnames';

class PlayerControl extends React.Component {
  constructor(props) {
    super(props);
  }

  playPause() {
    this.props.state.playStatus === Sound.status.PLAYING ? <i className="fa fa-backward"></i> : <i className="fa fa-backward"></i>
  }

  render() {
      const playPauseClass = ClassNames({
      'fa fa-play': this.props.state.playStatus == 'PLAYING' ? false : true,
      'fa fa-pause': this.props.state.playStatus == 'PLAYING' ? true : false
    });

    return (
        <div className="player">
        <p className = "SongName">Song is {this.props.state.currentSong.title}</p>
          <div className="player__backward">
            <button onClick={this.props.onPrevious}><i className="fa fa-backward"></i></button>
            <button onClick={this.props.onBackward}><i className="fa fa-fast-backward"></i></button>
          </div>
          <div className="player__main">
            <button onClick={this.props.ontogglePlay}><i className={playPauseClass}></i></button>
            <button onClick={this.props.onStop}><i className="fa fa-stop"></i></button>
            <button onClick={this.props.onRandom}><i className="fa fa-random"></i></button>
          </div>
          <div className="player__forward">
            <button onClick={this.props.onForward}><i className="fa fa-fast-forward"></i></button>
            <button onClick={this.props.onNext}><i className="fa fa-forward"></i></button>
          </div>
          </div>
    )
  }
}

module.exports = PlayerControl

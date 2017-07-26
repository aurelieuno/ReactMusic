import React from 'react';
import Sound from 'react-sound';
import songs from './songs2.json'
import PlayerControl from './PlayerControl'
import PlayList from './PlayList'
import ProgressBar from './ProgressBar'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client_id: '2f98992c40b8edf17423d93bda2e04ab',
            currentSong : songs[0],
            playStatus : Sound.status.PLAYING,
            volume: 50,
            position:0,
            duration:0
        }
    }

    onPrevious () {
        var index = songs.indexOf(this.state.currentSong);
        this.setState({
            currentSong : index ? songs[index-1] : songs[songs.length-1]
        })
    }

    onNext () {
        var index = songs.indexOf(this.state.currentSong);
        console.log(index)
        this.setState({
            currentSong : index === songs.length-1 ? songs[0] : songs[index+1]
        })
        console.log(this.state.currentSong)
    }

    onSongChange (song) {
        var index = songs.indexOf(song);
        this.setState({
            currentSong : songs[index]
        })
    }

    ontogglePlay(){
        this.setState(prevState=> ({
            playStatus : prevState.playStatus === Sound.status.PLAYING ? Sound.status.PAUSED : Sound.status.PLAYING
        }))
    }

    atArtwork(url){
        return url !== null ? url.replace(/large/, 't250x250') : '../dist/girl-smiley-face.png'
        //return url.replace(/large/, 't250x250')
    }

    forward(){

  }

    backward(){

  }

    formatMilliseconds(milliseconds) {
       var minutes = Math.floor(milliseconds / 60000);
       milliseconds = milliseconds % 60000;
       var seconds = Math.floor(milliseconds / 1000);
       milliseconds = Math.floor(milliseconds % 1000);

       return (minutes < 10 ? '0' : '') + minutes + ':' +
          (seconds < 10 ? '0' : '') + seconds + ':' +
          (milliseconds < 100 ? '0' : '') + milliseconds;
    }




render() {
    const volume = this.state.volume;


    const niceStyle = {
      width: '250px',
      height: '180px',
      backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),   url(${this.atArtwork(this.state.currentSong.artwork_url)})`
    }

  return (
    <div>
    <PlayList
    songs = {songs}
    onSongChange= {this.onSongChange.bind(this)}
    />
    <div className = "player" style = {niceStyle}>
    <PlayerControl
    state = {this.state}
    songs = {songs}
    onPlay={() => this.setState({playStatus: Sound.status.PLAYING})}
    ontogglePlay={this.ontogglePlay.bind(this)}
    onPause={() => this.setState({playStatus: Sound.status.PAUSED})}
    onResume={() => this.setState({playStatus: Sound.status.PLAYING})}
    onStop={() => this.setState({playStatus: Sound.status.STOPPED})}
    onNext= {this.onNext.bind(this)}
    onPrevious={this.onPrevious.bind(this)}
    onVolumeUp = {() => this.setState((prevState) => ({
        volume : prevState.volume+1
         }))}
    onVolumeDown = {() => this.setState((prevState) => ({
        volume : prevState.volume-1
         }))}
    />
    <Sound
      url={`${this.state.currentSong.stream_url}?client_id=${this.state.client_id}`}
      playStatus={this.state.playStatus}
      playFromPosition={this.state.position}
      volume={volume}
      onLoading={({bytesLoaded, bytesTotal}) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
      onPlaying={({position,duration}) => this.setState({ position })}
      onFinishedPlaying={this.onNext.bind(this)} />

    <ProgressBar
      duration={this.formatMilliseconds.bind(this,{this.state.currentSong.duration})}
      position = {this.formatMilliseconds.bind(this,{this.state.position})}
      duration1={this.state.currentSong.duration}
      position1 = {this,this.state.position}

      />
      </div>
      </div>
  );
}
}

module.exports = App

/*Props
url (string): The url of the sound to play.

playStatus (Sound.status.{PLAYING,STOPPED,PAUSED}): The current sound playing status.
Change it in successive renders to play, stop, pause and resume the sound.

playFromPosition (number): Seeks to the position specified by this prop, any time it changes.
After that, the sound will continue playing (or not, if the playStatus is not PLAYING).
Use this prop to seek to different positions in the sound, but not use it as a controlled component.
You should use either this prop or position, but not both.

position (number): The current position the sound is at. Use this to make the component a controlled component,
meaning that you must update this prop on every onPlaying callback. You should use either this prop or playFromPosition, but not both.

volume (number): The current sound's volume. A value between 0 and 100.

autoLoad (boolean): If the sound should start loading automatically (defaults to false).

onLoading (function): Function that gets called while the sound is loading.
It receives an object with properties bytesLoaded, bytesTotal and duration.

onPlaying (function): Function that gets called while the sound is playing.
It receives an object with properties position and duration.

onFinishedPlaying (function): Function that gets called when the sound finishes playing (reached end of sound).
It receives no parameters.

https://api.soundcloud.com/tracks?client_id=2f98992c40b8edf17423d93bda2e04ab&q=beyonce
`${url}?client_id=2f98992c40b8edf17423d93bda2e04ab
https://api.soundcloud.com/tracks/238162839/stream?client_id=2f98992c40b8edf17423d93bda2e04ab
https://api.soundcloud.com/tracks/238162839/stream

Palatino Linotype
*/
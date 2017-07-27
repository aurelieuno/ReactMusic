import React from 'react';
import axios from 'axios';
import {fetchAPI} from '../utils/api.js';

class SearchBar extends React.Component {

  render() {
    return (
      <div>
      <div className = "search-box">
      <p className = "title">Your SoundCloud Music Player</p>
       <form className = "form-inline my-2 my-lg-0" onSubmit = {this.props.handleSubmit}>
       <input className ="form-control mr-sm-2" type="text" placeholder="Search SoundCloud..." value = {this.props.state.value} onChange={this.props.handleChange}/>
       <button className="btn btn-success" type="submit"><i className="fa fa-music"></i><i className="fa fa-music"></i><i className="fa fa-music"></i></button>
       </form>
       </div>
       <div>
      {!this.props.state.data?
        <p></p> :
        <Results list={this.props.state.data} addToList={this.props.addToList}/>}
      </div>
      </div>
    )
  }
}

class Results extends React.Component {
  render() {

    return (
      <div className = "container">
      {this.props.list.map(e => (
              <img
                 className="img-thumbnail"
                 height="75"
                 width="75"
                 onClick={()=>(this.props.addToList(e))}
                 src={e.artwork_url ?
                   e.artwork_url :
                   '../dist/blue.jpg'}
                 />
              ))}
      </div>
    )
  }
}

module.exports = SearchBar


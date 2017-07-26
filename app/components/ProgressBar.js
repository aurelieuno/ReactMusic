import React from 'react';


class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
        <div>
        <progress className = "progress"
        value={this.props.position} max={this.props.duration}></progress>


        <p>{this.props.position}</p>
        <p>{this.props.duration}</p>
        <p>{this.props.position1}</p>
        <p>{this.props.duration1}</p>
        </div>
  )
}
}



module.exports = ProgressBar
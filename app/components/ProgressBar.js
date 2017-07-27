import React from 'react';


class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const position = this.props.formatMilliseconds(this.props.position);
    const duration = this.props.formatMilliseconds(this.props.duration);

    return (
        <div>
        <span className="spantime">{position}</span>
        <progress className="progress"
        value={this.props.position} max={this.props.duration}></progress>
        <span className="spantime">{duration}</span>
        </div>
  )
}
}



module.exports = ProgressBar

/*The progress className="progress" does some formatting to the progress bar,
with no class Name reverts to the blue original formatting*/
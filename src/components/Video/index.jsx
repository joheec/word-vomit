import React from 'react';
import './styles.css';

class Video extends React.Component {
  player = null;

  componentDidMount() {
    const { id } = this.props;
    window.videoComponents.push(this.setPlayer(id));
  }

  setPlayer = videoId => event => {
    this.player = new window.YT.Player('player-' + videoId, {
      videoId,
      events: {
        onStateChange: event => {},
        onError: event => {}
      }
    });
  }

  render() {
    const { id } = this.props;
    return (
      <div className="video-container">
        <div id={ "player-" + id }></div>
      </div>
    );
  }
}

export default Video;

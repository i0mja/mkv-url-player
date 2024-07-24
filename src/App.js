import React, { Component } from "react";
import Loading from "./components/Loading";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

class App extends Component {
  state = {
    loading: false,
    video: null,
    subtitle: null,
    fonts: [],
    videoURL: ""
  };

  handleInputChange = (event) => {
    this.setState({ videoURL: event.target.value });
  };

  handleStreamClick = () => {
    const { videoURL } = this.state;
    if (videoURL) {
      this.setState({ video: videoURL });
    }
  };

  render() {
    if (this.state.video) {
      const videoJsOptions = {
        autoplay: true,
        controls: true,
        fluid: true,
        sources: [
          {
            src: this.state.video,
            type: "video/webm"
          }
        ],
        subtitle: this.state.subtitle,
        fonts: this.state.fonts
      };
      return <VideoPlayer {...videoJsOptions} />;
    } else {
      const loading = this.state.loading ? <Loading /> : "";
      return (
        <div className="App">
          {loading}
          <h1>Web-based MKV Player</h1>
          <input
            type="text"
            value={this.state.videoURL}
            onChange={this.handleInputChange}
            placeholder="Enter video URL"
          />
          <button onClick={this.handleStreamClick}>Stream Video</button>
        </div>
      );
    }
  }
}

export default App;

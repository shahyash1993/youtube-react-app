import React, { Component } from "react";
import SearchBar from "./SearchBar.jsx";
import youtube from "../apis/youtube.jsx";
import VideoList from "./VideoList.jsx";
import VideoDetail from "./VideoDetail.jsx";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onSearchTextSubmit("car");
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  onSearchTextSubmit = async searchText => {
    const response = await youtube.get("/search", {
      params: {
        q: searchText
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
    console.log("res>", response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTextSubmit={this.onSearchTextSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

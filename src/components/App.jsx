import React, { Component } from "react";
import SearchBar from "./SearchBar.jsx";
import youtube from "../apis/youtube.jsx";
import VideoList from "./VideoList.jsx";

class App extends Component {
  state = {
    videos: []
  };

  onSearchTextSubmit = async searchText => {
    const response = await youtube.get("/search", {
      params: {
        q: searchText
      }
    });

    this.setState({ videos: response.data.items });
    console.log("res>", response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTextSubmit={this.onSearchTextSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

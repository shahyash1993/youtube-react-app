import React, { Component } from "react";
import SearchBar from "./SearchBar.jsx";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;

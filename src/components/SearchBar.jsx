import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchText: "civil"
  };

  onFormSubmit = ev => {
    ev.preventDefault();
    this.props.onSearchTextSubmit(this.state.searchText);
  };

  onInputChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="label">Video Search</label>
            <input
              type="text"
              name="searchText"
              className=""
              onChange={this.onInputChange}
              value={this.state.searchText}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

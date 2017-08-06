import React from "react";

const SearchBar = () =>
  <div className="row">
    <div className="col-xs-6">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Look up a school"
          id="search"
        />
        <span className="input-group-btn">
          <button className="btn btn-info" type="button">
            <span className="glyphicon glyphicon-search" />
          </button>
        </span>
      </div>
    </div>
    <div className="col-xs-3">
      <select className="form-control" id="city">
        <option>Select a City</option>
        <option>Auckland</option>
        <option>Wellington</option>
        <option>Christchurch</option>
        <option>Hamilton</option>
      </select>{" "}
    </div>
    <div className="col-xs-3">
      <select className="form-control" id="decile">
        <option>Filter by Decile</option>
        <option>Decile 9 and above</option>
        <option>Decile 7 to 8</option>
        <option>Decile 1 to 6</option>
      </select>{" "}
    </div>
  </div>;

export default SearchBar;

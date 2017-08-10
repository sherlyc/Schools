import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: { name: "", city: "", type: "" }
    };
  }
  handleChange(e) {
    const field = e.target.id;
    this.setState({
      filter: {
        ...this.state.filter,
        [field]: e.target.value
      }
    });
  }

  handleSearch(e) {
    const filter = this.state.filter;
    this.props.search(filter.name);
  }

  handleFilter(e) {
    const filter = this.state.filter;

    if (filter.city || filter.type) {
      this.props.filter(filter);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Look up a school"
              id="name"
              onChange={this.handleChange.bind(this)}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-info"
                id="btnSearch"
                type="button"
                onClick={this.handleSearch.bind(this)}
              >
                <span className="glyphicon glyphicon-search" />
              </button>
            </span>
          </div>
        </div>
        <div className="col-xs-3">
          <select
            className="form-control"
            id="city"
            onChange={this.handleChange.bind(this)}
          >
            <option value="">Select a City</option>
            <option>Auckland</option>
            <option>Wellington</option>
            <option>Christchurch</option>
            <option>Hamilton</option>
          </select>{" "}
        </div>
        <div className="col-xs-3">
          <select
            className="form-control"
            id="type"
            onChange={this.handleChange.bind(this)}
          >
            <option value="">School Type</option>
            <option>Contributing</option>
            <option>Full Primary</option>
            <option>Intermediate</option>
            <option>Restricted Composite (Year 7-10)</option>
            <option>Secondary (Year 11-15)</option>
            <option>Secondary (Year 7-10)</option>
            <option>Secondary (Year 9-15)</option>
            <option>Special School</option>
            <option>Teen Parent Unit</option>
            <option>Correspondence School</option>
          </select>{" "}
        </div>
        <div className="col-xs-3">
          <button
            className="btn btn-info"
            type="button"
            onClick={this.handleFilter.bind(this)}
          >
            <span className="glyphicon glyphicon-search" />
          </button>
        </div>
      </div>
    );
  }
}

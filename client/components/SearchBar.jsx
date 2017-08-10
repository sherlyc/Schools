import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: { city: "", age: "" }
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

  handleSubmit(e) {
    console.log(this.state.filter);
    this.props.filter(this.state.filter);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-4">
          <select
            className="form-control"
            id="city"
            onChange={this.handleChange.bind(this)}
          >
            <option>Select a City</option>
            <option>Auckland</option>
            <option>Wellington</option>
            <option>Christchurch</option>
            <option>Hamilton</option>
          </select>{" "}
        </div>
        <div className="col-xs-4">
          <select
            className="form-control"
            id="age"
            onChange={this.handleChange.bind(this)}
          >
            <option>Attending Age</option>
            <option>Preschool</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
          </select>{" "}
        </div>
        <div className="col-xs-4">
          <button
            className="btn btn-info"
            type="button"
            onClick={this.handleSubmit.bind(this)}
          >
            <span className="glyphicon glyphicon-search" />
          </button>
        </div>
      </div>
    );
  }
}

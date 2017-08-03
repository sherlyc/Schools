import React from "react";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSchools } from "../actions";

class SchoolsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      schools: [],
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchSchools());
  }

  componentWillReceiveProps(nextProps) {
    const schoolsList = nextProps.schoolsResults.map((school, i) => {
      return {
        id: school.ID,
        name: school.Name,
        city: school.City,
        decile: school.Decile
      };
    });

    this.setState({
      schools: schoolsList,
      schoolsResults: nextProps.schoolsResults
    });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>List of Schools in New Zealand</h1>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Decile</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pageOfItems.map(item =>
                <tr key={item.id}>
                  <td>
                    {item.id}
                  </td>
                  <td>
                    <Link to={"/schools/" + item.id}>
                      {item.name}
                    </Link>
                  </td>
                  <td>
                    {item.city}
                  </td>
                  <td>
                    {item.decile}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="text-center">
            <Pagination
              items={this.state.schools}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schoolsResults: state.schoolsResults
  };
}

SchoolsContainer = connect(mapStateToProps)(SchoolsContainer);
export default SchoolsContainer;

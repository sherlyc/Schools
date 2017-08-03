import React from "react";
import Pagination from "../components/Pagination";
import _ from "underscore";
import { connect } from "react-redux";
import { fetchSchools } from "../actions";

class ExampleContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      schools: [],
      pageOfItems: []
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchSchools());
  }

  componentWillReceiveProps(nextProps) {
    const schoolsList = nextProps.schoolsResults.map((school, i) => {
      return { id: i, name: school.Name };
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
            <h1>School List with Pagination Test</h1>
            {this.state.pageOfItems.map(item =>
              <div key={item.id}>
                {item.name}
              </div>
            )}
            <Pagination
              items={this.state.schools}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schoolsResults: state.schoolsResults
  };
}

ExampleContainer = connect(mapStateToProps)(ExampleContainer);
export default ExampleContainer;

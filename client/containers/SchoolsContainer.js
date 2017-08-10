import React from "react";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import SchoolModal from "../components/Modal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSchools } from "../actions";
import { sorting, filtering } from "../actions/sorting";

class SchoolsContainer extends React.Component {
  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChangePage = this.onChangePage.bind(this);

    this.state = {
      schools: [],
      pageOfItems: [],
      sorting: {
        Name: "",
        City: "",
        Decile: ""
      }
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchSchools());
  }

  componentWillReceiveProps(nextProps) {
    const result = nextProps.schoolsResults.schoolsResults;
    const schoolsList = result.map((school, i) => {
      return {
        id: school.ID,
        name: school.Name,
        type: school.School_Type,
        city: school.City,
        decile: school.Decile
      };
    });

    this.setState({
      schools: schoolsList,
      schoolsResults: result
    });
  }

  openModal(e) {
    e.preventDefault();
    this.setState({
      showModal: true,
      SchoolID: e.target.id
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  sortBy(e) {
    e.preventDefault();
    let sortField = e.target.id;
    let toggleSort = this.state.sorting[sortField] == "" ? "ASC" : "";
    this.setState({ sorting: { [sortField]: toggleSort } });
    this.props.dispatch(sorting(sortField, toggleSort));
  }

  filterBy(e) {
    this.props.dispatch(filtering(e));
  }

  render() {
    let modal = null;
    var showModal = this.state.showModal;
    if (showModal) {
      modal = (
        <SchoolModal SchoolID={this.state.SchoolID} onClose={this.closeModal} />
      );
    }
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>List of Schools in New Zealand</h1>
          </div>
          <SearchBar filter={this.filterBy.bind(this)} />
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>
                  <a href="#" id="Name" onClick={this.sortBy.bind(this)}>
                    Name
                  </a>
                </th>
                <th>
                  <a href="#" id="School_Type" onClick={this.sortBy.bind(this)}>
                    Type
                  </a>
                </th>
                <th>
                  <a href="#" id="City" onClick={this.sortBy.bind(this)}>
                    City
                  </a>
                </th>
                <th>
                  <a href="#" id="Decile" onClick={this.sortBy.bind(this)}>
                    Decile
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.pageOfItems.map(item =>
                <tr key={item.id}>
                  <td>
                    {item.id}
                  </td>
                  <td>
                    <a href="#" id={item.id} onClick={this.openModal}>
                      {item.name}
                    </a>
                  </td>
                  <td>
                    {item.type}
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
          {modal}
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

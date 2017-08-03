import React from "react";
import GMap from "./GMap";
import { connect } from "react-redux";
import { deleteSchool } from "../actions";
import { Link } from "react-router-dom";

export default class SchoolProfile extends React.Component {
  handleClick = e => {
    let result = confirm("Confirming delete?");
    if (result) {
      props.dispatch(deleteSchool(school.id));
    } else {
      e.preventDefault();
    }
  };
  //combine street, suburb and city to form address
  formatAddress = (street, suburb, city) => {
    let strStreet = street ? street : "";
    let strSuburb = suburb ? ", " + suburb : "";
    let strCity = city ? ", " + city : "";

    return strStreet + strSuburb + strCity;
  };

  render = () => {
    const school = this.props.school || {};
    return (
      <div className="school">
        <div>
          <h2>School Profile</h2>
          <ul>
            <li>
              Name : {school.Name}
            </li>
            <li>
              School Type : {school.School_Type}
            </li>
            <li>
              Authority : {school.Authority}
            </li>
            <li>
              Gender : {school.Gender}
            </li>
            <li>
              Decile : {school.Decile}
            </li>
            <li>
              Address :{" "}
              {this.formatAddress(school.Street, school.Suburb, school.City)}
            </li>
            <li>
              Suburb : {school.Suburb}
            </li>
            <li>
              Email : {school.Email}
            </li>
            <li>
              Website :
              <a href={school.School_Website}> {school.School_Website}</a>
            </li>
          </ul>
          <div className="actions">
            <Link to={"/schools/edit/" + school.id}>
              <i className="fa fa-pencil" aria-hidden="true" />
            </Link>{" "}
            {}
            <i
              className="fa fa-trash-o"
              aria-hidden="true"
              onClick={this.handleClick}
            />
          </div>
        </div>
        <div className="map">
          <GMap center={{ lat: school.Latitude, lng: school.Longitude }} />
        </div>
      </div>
    );
  };
}

SchoolProfile = connect()(SchoolProfile);

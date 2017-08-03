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
      <div>
        <div className="school">
          <div>
            <h2>
              {school.Name}
            </h2>
            <h4>
              {" "}{this.formatAddress(
                school.Street,
                school.Suburb,
                school.City
              )}{" "}
            </h4>
            <ul className="list-group">
              <li className="list-group-item">
                <b> School Type </b> : {school.School_Type}
              </li>
              <li className="list-group-item">
                Authority : {school.Authority}
              </li>
              <li className="list-group-item">
                Gender : {school.Gender}
              </li>
              <li className="list-group-item">
                Decile : {school.Decile}
              </li>
              <li className="list-group-item">
                Address :{" "}
                {this.formatAddress(school.Street, school.Suburb, school.City)}
              </li>
              <li className="list-group-item">
                Suburb : {school.Suburb}
              </li>
              <li className="list-group-item">
                Email : {school.Email}
              </li>
              <li className="list-group-item">
                Website :
                <a href={school.School_Website}> {school.School_Website}</a>
              </li>
            </ul>
            {/* <div className="actions">
            <Link to={"/schools/edit/" + school.id}>
              <i className="fa fa-pencil" aria-hidden="true" />
            </Link>{" "}
            {}
            <i
              className="fa fa-trash-o"
              aria-hidden="true"
              onClick={this.handleClick}
            />
          </div> */}
          </div>
          <div className="map">
            <GMap center={{ lat: school.Latitude, lng: school.Longitude }} />
          </div>
        </div>
        {/* <div>
          <h4>Properties Nearby : </h4>{" "}
        </div> */}
      </div>
    );
  };
}

SchoolProfile = connect()(SchoolProfile);

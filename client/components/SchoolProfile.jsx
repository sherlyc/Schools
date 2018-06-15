import React from "react";
import GMap from "./GMap";
import { connect } from "react-redux";
import { deleteSchool } from "../actions";
import { Grid, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class SchoolProfile extends React.Component {
  //combine street, suburb and city to form address
  formatAddress = (street, suburb, city) => {
    let strStreet = street ? street : "";
    let strSuburb = suburb ? ", " + suburb : "";
    let strCity = city ? ", " + city : "";

    return strStreet + strSuburb + strCity + ".";
  };

  coordinateCheck = (lat, lng) => {
    if (typeof lat == "number" && typeof lng == "number") {
      return { lat, lng };
    } else {
      return { lat: 0, lng: 0 };
    }
  };

  render = () => {
    const school = this.props.school || {};
    return (
     <div>
      <div className="profile__school-title">
            <h2 className="main-title">
              {school.Name}
            </h2>
            <p className="secondary-info">
              {this.formatAddress(
                school.Street,
                school.Suburb,
                school.City
              )} Decile: { school.Decile } 
            </p>
      </div>
      <div className="border-bottom"></div>
      <div className="profile__school-details">
              <ul className="profile__school-list">
                <li className="profile__school-list-item">
                  <div className="profile__school-list-label">School type</div>
                  <div className="profile__school-list-value">{school.School_Type}</div>
                </li>
                <li className="profile__school-list-item">
                  <div className="profile__school-list-label">Authority</div>
                  <div className="profile__school-list-value">{school.Authority}</div>
                </li>
                <li className="profile__school-list-item">
                  <div className="profile__school-list-label">Gender</div>
                  <div className="profile__school-list-value">{school.Gender}</div>
                </li>
                <li className="profile__school-list-item">
                  <div className="profile__school-list-label">School roll</div>
                  <div className="profile__school-list-value">{school.School_Roll}</div>
                </li>
                <li className="profile__school-list-item">
                  <div className="profile__school-list-label">Principal</div>
                  <div className="profile__school-list-value">{school.Principal}</div>
                </li>
                <li className="profile__school-list-item">
                  <div className="profile__school-list-label">Suburb</div>
                  <div className="profile__school-list-value">{school.Suburb || 'N/A'}</div>
                </li>
                <li className="profile__school-list-item">
                  <div className="profile__school-list-label">Email</div>
                  <div className="profile__school-list-value">{school.Email}</div>
                </li>
                <li className="profile__school-list-item">
                  <div className="profile__school-list-label">Website</div>
                  <div className="profile__school-list-value">{school.School_Website || 'N/A'}</div>
                </li>
              </ul>
      </div>

      <Grid>
        <Row>
          <Col md={6}>
            <ListGroup>
              <ListGroupItem>
                School Type : {school.School_Type}
              </ListGroupItem>
              <ListGroupItem>
                Authority : {school.Authority}
              </ListGroupItem>
              <ListGroupItem>
                Gender : {school.Gender}
              </ListGroupItem>
              <ListGroupItem>
                School Roll : {school.School_Roll}
              </ListGroupItem>
              <ListGroupItem>
                Min. Edu. Office : {school.ME_Local_Office}
              </ListGroupItem>
              <ListGroupItem>
                Principal : {school.Principal}
              </ListGroupItem>
              <ListGroupItem>
                Decile : {school.Decile}
              </ListGroupItem>
              <ListGroupItem>
                Address :{" "}
                {this.formatAddress(school.Street, school.Suburb, school.City)}
              </ListGroupItem>
              <ListGroupItem>
                Suburb : {school.Suburb}
              </ListGroupItem>
              <ListGroupItem>
                Email : {school.Email}
              </ListGroupItem>
              <ListGroupItem>
                Website :
                <a href={school.School_Website}> {school.School_Website}</a>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={6}>
            <GMap
              center={this.coordinateCheck(school.Latitude, school.Longitude)}
            />
          </Col>
        </Row>
      </Grid>
    </div>
    );
  };
}

SchoolProfile.propTypes = {
  school: PropTypes.object.isRequired,
  center: PropTypes.object,
  formatAddress: PropTypes.func,
  coordinateCheck: PropTypes.func
};

SchoolProfile = connect()(SchoolProfile);

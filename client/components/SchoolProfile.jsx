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

    return strStreet + strSuburb + strCity;
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
      <Grid>
        <Row>
          <Col>
            <h2>
              {school.Name}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}{this.formatAddress(
              school.Street,
              school.Suburb,
              school.City
            )}{" "}
          </Col>
        </Row>
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

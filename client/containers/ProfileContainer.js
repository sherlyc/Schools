import React from "react";
import { connect } from "react-redux";
import SchoolProfile from "../components/SchoolProfile";
import { getSchool } from "../actions";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getSchool(this.props.schoolID));
  }

  render() {
    return (
      <div>
        <SchoolProfile school={this.props.schoolProfile} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schoolProfile: state.schoolProfile
  };
}

ProfileContainer = connect(mapStateToProps)(ProfileContainer);
export default ProfileContainer;

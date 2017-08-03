import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import SchoolsContainer from "../containers/SchoolsContainer";
import AddSchoolForm from "./AddSchoolForm";
import EditSchoolForm from "./EditSchoolForm";
import ProfileContainer from "../containers/ProfileContainer";
import { HashRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="content">
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/schools" component={SchoolsContainer} />
            <Route exact={true} path="/add" component={AddSchoolForm} />
            <Route
              exact={true}
              path="/schools/:id"
              component={ProfileContainer}
            />
            <Route
              exact={true}
              path="/schools/edit/:id"
              component={EditSchoolForm}
            />
          </div>
        </div>
      </Router>
    );
  }
}

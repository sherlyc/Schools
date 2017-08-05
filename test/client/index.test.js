import React from "react";
import App from "../../client/components/App";
import Home from "../../client/components/Home";

describe("a passing test", () => {
  it("should pass", () => {
    expect(true).to.be.true;
  });
});

describe("Default App", () => {
  it("should render Home", () => {
    const wrapper = mount(<App />);
    expect(wrapper.contains(<h1>Welcome to Schools</h1>)).to.equal(true);
  });
});

describe("Home component", () => {
  it("should render an Image", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<img src="./school.jpg" />)).to.equal(true);
  });
});

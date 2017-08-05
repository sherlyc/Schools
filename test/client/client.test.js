import test from "ava";
import React from "react";
import App from "../../client/components/App";
import Home from "../../client/components/Home";

test("Default app should render Home component", t => {
  const wrapper = mount(<App />);
  const child = <h1>Welcome to Schools</h1>;
  t.true(wrapper.contains(child));
});

test("Home component should render an image", t => {
  const wrapper = shallow(<Home />);
  const image = <img src="./school.jpg" />;
  t.true(wrapper.contains(image));
});

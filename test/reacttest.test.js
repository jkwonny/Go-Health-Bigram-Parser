import App from "../src/App.jsx";
import React, {Component} from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import "babel-polyfill"

//enzyme configuration
configure({ adapter: new Adapter() });

//testing App component
describe("testing App component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />); 
  });
  it("renders without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });
  it("matches snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should render a two input types", () => {
    expect(wrapper.find('input')).toHaveLength(2);
  })
});
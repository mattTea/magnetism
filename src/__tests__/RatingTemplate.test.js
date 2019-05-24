import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import { RatingTemplate } from '../templates/RatingTemplate';
import { shallow, mount, configure, render } from 'enzyme';
// import { fireEvent, getByTestId, render} from "react-testing-library";
import Adapter from 'enzyme-adapter-react-16';
import { Container, Form, Input, Button, Rating } from 'semantic-ui-react';

configure({ adapter: new Adapter() })

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RatingTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Upgrading rating to 2", () => {
  const wrapper = shallow(<RatingTemplate id={1}/>);
  const instance = wrapper.instance()
  instance.setScore({rating: "2"})
  expect(instance.state.score).toEqual("2")
});

test("returning correct form after rating set", () => {
  const wrapper = shallow(<RatingTemplate id={1}/>);
  const instance = wrapper.instance()
  instance.setScore({rating: "2"})
});

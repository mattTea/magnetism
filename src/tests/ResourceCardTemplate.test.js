import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import { ResourceCardTemplate } from '../templates/ResourceCardTemplate';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResourceCardTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const mockJSon = {
    id: 1,
    name: "Google",
    description: "Your best friend!",
    url: "https://www.google.com/"
  };


// test('fetches data from server when server returns a successful response', done => {
//     const mockSuccessResponse = {};
//     const mockJsonPromise = Promise.resolve(mockSuccessResponse);
//     const mockFetchPromise = Promise.resolve({
//       json: () => mockJsonPromise,
//     });
//
//     jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
//
//     const wrapper = shallow(<ResourceCardTemplate />)
//
//     expect(global.fetch).toHaveBeenCalledTimes(1);
//
//     process.nextTick(() => { // 6
//      expect(wrapper.state()).toEqual({
//        "list": []
//      });
//
//      global.fetch.mockClear();
//      done();
//   });
// });

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResourceCardTemplate dataSource="http://mag-neto.herokuapp.com/api/topics/1/subtopics/1/resources"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import { CardTemplate } from '../templates/CardTemplate';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from 'semantic-ui-react'

configure({ adapter: new Adapter() })

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('fetches data from server when server returns a successful response', done => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
  })


  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)

  const wrapper = shallow(<CardTemplate />)
  expect(global.fetch).toHaveBeenCalledTimes(1);

  process.nextTick(() => { // 6

    global.fetch.mockClear();
    done();
  });
});

test('generates card', () => {
  const wrapper = shallow(<CardTemplate />)
  const instance = wrapper.instance();
  instance.cardGenerator({
    id:1,
    name:'butterfly',
    description:'Your best friend!'
  })
  const div = document.createElement('div');
  ReactDOM.render(wrapper, div);
  expect('Your best friend!').toBeInTheDocument
})

test('generates card with lorem ipsum', () => {
  const wrapper = shallow(<CardTemplate />)
  const instance = wrapper.instance();
  instance.cardGenerator({
    id:1,
    name:'butterfly',
  })
  const div = document.createElement('div');
  ReactDOM.render(wrapper, div);
  expect('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet justo et lorem pretium mollis. Phasellus rhoncus tempor lorem id convallis.').toBeInTheDocument
})

import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import { ResourceCardTemplate } from '../templates/ResourceCardTemplate';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from 'semantic-ui-react'

configure({ adapter: new Adapter() });

const wantedCard =() => {
  return <Card key='1' color='purple' >
    <Card.Content>
      <Card.Header>
        google
      </Card.Header>
      <Card.Description>
        your best friend!
      </Card.Description>
    </Card.Content>
  </Card>
}
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResourceCardTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});


const mockJson = {
  id: 1,
  name: "Google",
  description: "Your best friend!",
  url: "https://www.google.com/"
};


test('fetches data from server when server returns a successful response', done => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
  })


  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)

  const wrapper = shallow(<ResourceCardTemplate />)
  expect(global.fetch).toHaveBeenCalledTimes(1);

  process.nextTick(() => { // 6

    global.fetch.mockClear();
    done();
  });
});

test('generates card', () => {
  const wrapper = shallow(<ResourceCardTemplate />)
  const instance = wrapper.instance();
  instance.cardGenerator(1, 'google', 'your best friend!')
  expect(instance.cardGenerator(1, 'google', 'your best friend!')).toEqual(wantedCard())
})

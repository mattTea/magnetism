import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import { ResourceCardTemplate } from '../templates/ResourceCardTemplate';
import { RatingTemplate } from '../templates/RatingTemplate';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from 'semantic-ui-react'

configure({ adapter: new Adapter() });

const wantedCard =() => {
  return <Card key='1' color='purple' >
  <Card.Content>
    <Card.Header>
      Google
    </Card.Header>
    <Card.Description>
      Your best friend!
    </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <br/>
    How confident are you that you know this?
    <br/>
    <br/>
    <RatingTemplate id={1}/>
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
  expect(instance.cardGenerator({id:1, name:'Google', content:'Your best friend!'})).toEqual(wantedCard())
})

test('generates card list', () => {
  const wrapper = shallow(<ResourceCardTemplate />)
  const instance = wrapper.instance();
  instance.setState({list: ["id":1, "name":'Google', "content":'Your best friend!'] })

})

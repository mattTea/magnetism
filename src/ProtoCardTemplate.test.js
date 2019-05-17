import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import ProtoCardTemplate from './ProtoCardTemplate';
import 'jest-dom/extend-expect';
import values from './sample.json'

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProtoCardTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('ProtoCardTemplate component fetches a title from json and renders it', () => {
  const { getByText } = render(<ProtoCardTemplate />);
  expect(getByText('Physics-Props')).toBeInTheDocument();
  expect(getByText('Maths')).toBeInTheDocument();
})

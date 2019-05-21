import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { ResourcesPage } from '../pages/ResourcesPage.js';
import { CardTemplate } from '../templates/CardTemplate';
import 'jest-dom/extend-expect';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardTemplate thisSection={"/topics/1/subtopics/1/resources" + "/"} nextSection="/content" dataSource="/topics/1/subtopics/1/resources"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('renders without crashing', () => {
//   const this = {props: {location: { pathname: '/topics/1/subtopics/1/resources' }}};
//   const div = document.createElement('div');
//   ReactDOM.render(<ResourcesPage />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

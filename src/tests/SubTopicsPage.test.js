import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { SubTopicsPage } from '../pages/SubTopicsPage.js';
import { CardTemplate } from '../templates/CardTemplate';
import 'jest-dom/extend-expect';

// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<CardTemplate thisSection={"/topics/1/subtopics" + "/"} nextSection="/resources" dataSource="/api/topics/1/subtopics"/>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubTopicsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

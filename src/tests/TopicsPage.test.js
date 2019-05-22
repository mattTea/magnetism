import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import TopicsPage from '../pages/TopicsPage';
import { CardTemplate } from '../templates/CardTemplate';
import 'jest-dom/extend-expect';

// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<CardTemplate thisSection={"/topics" + "/"} nextSection="/subtopics" dataSource="/api/topics"/>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopicsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

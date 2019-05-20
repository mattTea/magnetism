import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { TopicsPage } from '../pages/TopicsPage';
import 'jest-dom/extend-expect';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopicsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { ResourcesPage } from '../pages/ResourcesPage.js';
import { CardTemplate } from '../templates/CardTemplate';
import 'jest-dom/extend-expect';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResourcesPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

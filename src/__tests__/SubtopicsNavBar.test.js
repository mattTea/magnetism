import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, configure, render } from 'enzyme';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import { SubtopicsNavBar } from '../templates/SubtopicsNavBar.js';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubtopicsNavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

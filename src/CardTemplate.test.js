import React from 'react';
import ReactDOM from 'react-dom';
import CardTemplate from './CardTemplate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});

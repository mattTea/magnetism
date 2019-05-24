import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import { Menu } from 'semantic-ui-react';

export class TopicsNavBar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return(
      <Menu>
        <Menu.Item
          name='Welcome'
        />
      </Menu>
    )
  }
  
}
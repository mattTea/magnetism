import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import { Menu } from 'semantic-ui-react';

export class SubtopicsNavBar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    
    return(
      <Menu>
        <Menu.Item
          name='Back To Topics'
          active={activeItem === 'topics'}
          onClick={this.handleItemClick}
          href='/topics'
        />
      </Menu>
    )
  }
  
}
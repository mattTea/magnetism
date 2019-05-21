import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom'
import { CardTemplate } from '../templates/CardTemplate.js'
import '../App.css';

export class ResourcesPage extends React.Component {
  render() {
    return (
      <Container>
  				<CardTemplate thisSection={this.props.location.pathname + "/"} nextSection="/content" dataSource={"/api" + this.props.location.pathname}/>
      </Container>
    );
  }
};

export default ResourcesPage;

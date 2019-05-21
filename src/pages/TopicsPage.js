import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
import { CardTemplate } from '../templates/CardTemplate.js'
import '../App.css';

class TopicsPage extends React.Component {
  render() {
    return (
      <Container>
  				<CardTemplate thisSection={this.props.location.pathname + "/"} nextSection="/subtopics" dataSource="/api/topics"/>
      </Container>
    );
  }
};

export default TopicsPage;

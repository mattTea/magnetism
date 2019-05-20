import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
import { CardTemplate } from '../templates/CardTemplate.js'
import '../App.css';

class TopicsPage extends React.Component {
  render() {
    return (
      <Container>
  				<CardTemplate nextSection="/subtopics" dataSource="/topics"/>
      </Container>
    );
  }
};

export default TopicsPage;

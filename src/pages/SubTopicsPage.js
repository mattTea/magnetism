import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
import { CardTemplate } from '../templates/CardTemplate.js'
import '../App.css';

export class SubTopicsPage extends React.Component {
  render() {
    return (
      <Container>
  				<CardTemplate nextSection="/learn" dataSource="topics/1/subtopics"/>
      </Container>
    );
  }
};

export default SubTopicsPage;

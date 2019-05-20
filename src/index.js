import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
import { CardTemplate } from './CardTemplate.js'
import './App.css';

class TopicsPage extends React.Component {
  render() {
    return (
      <Container>
  				<CardTemplate nextSection="/subtopics" dataSource="http://localhost:5000/topics"/>
      </Container>
    );
  }
};

ReactDOM.render(<TopicsPage />, document.getElementById('topics'))

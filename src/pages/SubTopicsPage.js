import React from 'react';
import { Container } from 'semantic-ui-react';
import { CardTemplate } from '../templates/CardTemplate.js';
import { SubtopicsNavBar } from '../templates/SubtopicsNavBar';
import '../App.css';

export class SubTopicsPage extends React.Component {

  render() {
    return (
      <div>
        <SubtopicsNavBar />
        <Container>
          <CardTemplate />
        </Container>
      </div>
      
    );
  }
};

export default SubTopicsPage;

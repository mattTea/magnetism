import React from 'react';
import { Container } from 'semantic-ui-react';
import { CardTemplate } from '../templates/CardTemplate.js';
import { TopicsNavBar } from '../templates/TopicsNavBar';
import '../App.css';

export class TopicsPage extends React.Component {

  render() {
    return (
      <div>
        <TopicsNavBar />
        <Container>
          <CardTemplate />
        </Container>
      </div>
      
    );
  }
};

export default TopicsPage;

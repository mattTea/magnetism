import React from 'react';
import { Container } from 'semantic-ui-react';
import { CardTemplate } from '../templates/CardTemplate.js'
import '../App.css';

export class ResourcesPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
  				<CardTemplate />
      </Container>
    );
  }
};

export default ResourcesPage;

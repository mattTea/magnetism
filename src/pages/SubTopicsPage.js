import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom'
import { CardTemplate } from '../templates/CardTemplate.js'
import '../App.css';

export class SubTopicsPage extends React.Component {
  render() {
    return (
      <Container>
  				<CardTemplate thisSection={this.props.location.pathname + "/"} nextSection="/resources" dataSource={"/api" + this.props.location.pathname}/>
      </Container>
    );
  }
};


export default SubTopicsPage;

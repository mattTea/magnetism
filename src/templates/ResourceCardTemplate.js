import React from 'react';
import ReactDOM from 'react-dom';
import { RatingTemplate } from '../templates/RatingTemplate';
import '../App.css';
import { Form, Input, Rating, Button, Card } from 'semantic-ui-react'

export class ResourceCardTemplate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount(){
    this.getList();
  }

  getList = () => {
    fetch('/api' + window.location.pathname )
    .then((response) => response.json())
    .then(data => this.setState( {list:data} ));
  }

  cardGenerator = (item) => {
    return <Card key={ item.id } color='purple' >
    <Card.Content>
      <Card.Header>
        { item.name }
      </Card.Header>
      <Card.Description>
        { item.content }
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <br/>
      How confident are you that you know this?
      <br/>
      <br/>
      <RatingTemplate id={ item.id }/>
    </Card.Content>
    </Card>
  }

  cardList = () => {
    return this.state.list.map((item) => {
        return <Card key={ item.id } color='purple' >
        <Card.Content>
          <Card.Header>
            { item.name }
          </Card.Header>
          <Card.Description>
            { item.content }
          </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <br/>
          How confident are you that you know this?
          <br/>
          <br/>
          <RatingTemplate id={ item.id }/>
        </Card.Content>
        </Card>
    })
  }

  render = () => {
    return (
      <div>
      {this.state.list.length > 0 &&
        <Card.Group centered>
          {this.cardList()}
        </Card.Group>}
      </div>
    );
  }
}

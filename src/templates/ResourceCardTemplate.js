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

  cardGenerator = (id, name, content) => {
    return <Card key={ id } color='purple' >
    <Card.Content>
      <Card.Header>
        { name }
      </Card.Header>
      <Card.Description>
        { content }
      </Card.Description>
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
          I found this useful:
          <br/>
          <br/>
          <RatingTemplate />
        </Card.Content>
        </Card>
    })
  }

  render = () => {
    console.log(this.cardList())
      return (
        <div>
          { this.state.list.length > 0 &&
             <Card.Group centered>
               { this.cardList() }
             </Card.Group>
          }
        </div>
      );
    }
}

import React, { Component } from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react'


export default class ProtoCardTemplate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };

  componentDidMount() {
    if (window.location.href === "http://localhost:3000/") {
      var url = "http://localhost:5000/topics"
    } else {
      var url = "/topics"
    }
    fetch(url)
    .then((response) => response.json())
    .then(function(response) {
      return response
    })
    .then(data => this.setState({data}));
  }

  render() {
    const { data } = this.state;
    const itemList = data.map(function(item) {
      return <Card key={item.id}>
        <Image src='https://timedotcom.files.wordpress.com/2017/10/229-westerlund-21.jpg?w=1520&quality=85&h=1139' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Established: When the Big Bang did its thing</span>
          </Card.Meta>
          <Card.Description>
            Learn the essential science that forms the basis of our understanding of the origins of time and the universe
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            Learn!
          </a>
        </Card.Content>
      </Card>
    });
    return (
      <div>
        {data.length > 0 &&
           <ul>
             { itemList }
           </ul>
        }
      </div>
    );
  }
};

import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { Card } from 'semantic-ui-react'

export class ResourceCardTemplate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(this.props.dataSource).then((response) => response.json()).then(data => this.setState( {list:data} ));
    console.log(this.state)
  }
  render(){
    const ItemList = this.state.list.map((item) => {
      return  <Card key={item.id}>{item.id + item.name + item.url + item.content} </Card>
    });

    return (
      <Card.Group>
        {ItemList}
      </Card.Group>
    );
  }
}

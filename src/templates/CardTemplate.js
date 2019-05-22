import React from 'react';
import logo from '../logo.svg';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import { Card, Icon, Image } from 'semantic-ui-react'

export class CardTemplate extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  componentDidMount(){
    this.getList();
  }

  getList = () => {
    fetch('/api' + window.location.pathname )
    .then((response) => response.json())
    .then(data => this.setState( {list:data} ));
  }

  usedImage = (name) => {
    const images = this.importAll(require.context('../illustrations', false, /\.(png|jpe?g|svg)$/));
    const lowerCase = name.toLowerCase()
    if (images[ lowerCase + ".png" ]){
      return images[ lowerCase + ".png" ]
    } else {
      return images[ "defaultImage.png" ]
    }
  }

  render(){
    const itemListArray = this.state.list;
    const itemList = itemListArray.map((item) => {
      const thisURL = window.location.pathname
      const appendURL = thisURL.includes('subtopic')? '/' + item.id + '/resources' : '/' + item.id + '/subtopics'
      const finalURL = thisURL + appendURL
      return <Card key={ item.id } color='purple' >
      <Image src={ this.usedImage(item.name) } wrapped ui={false} />
      <Card.Content>
    		<Card.Header>
          { item.name }
        </Card.Header>
        <Card.Description>
          { item.description ? item.description : "Learn the essential science that forms the basis of our understanding of the origins of time and the universe" }
    		</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={ finalURL }>
          Learn { item.name }!
          </a>
      </Card.Content>
      </Card>
    });

    return (

      <div>
        { itemListArray.length > 0 &&
           <Card.Group centered>
             { itemList }
           </Card.Group>
        }
      </div>
    );
  }
}

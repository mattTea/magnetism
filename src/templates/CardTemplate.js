import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import { Card, Image } from 'semantic-ui-react'

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

  cardGenerator = (item) => {
    return <Card key={item.id} color='purple' >
    <Image
    src={ this.usedImage(item.name) }
    wrapped ui={false}
    />
    <Card.Content>
      <Card.Header>
        {item.name}
      </Card.Header>
      <Card.Description>
        { item.description ? item.description : "Learn the essential science that forms the basis of our understanding of the origins of time and the universe" }
      </Card.Description>
    </Card.Content>
    <Card.Content
    extra>
      <a href={this.nextURL(item.id)}>
        Learn {item.name}!
      </a>
    </Card.Content>
    </Card>
  };

  usedImage = (name) => {
    const images = this.importAll(require.context('../illustrations', false, /\.(png|jpe?g|svg)$/));
    const lowerCase = name.toLowerCase()
    if (images[ lowerCase + ".png" ]){
      return images[ lowerCase + ".png" ]
    } else {
      return images[ "defaultImage.png" ]
    }
  }

  nextURL = (id) => {
    const appendURL = window.location.pathname.includes('subtopic')? '/' + id + '/resources' : '/' + id + '/subtopics'
    return window.location.pathname + appendURL
  }


  render(){
    const itemListArray = this.state.list;
    const itemList = itemListArray.map((item) => {
      return this.cardGenerator(item)
    });

// FOR JEST REQUIRE CONTEXT
    if (typeof require.context === 'undefined') {
      const fs = require('fs');
      const path = require('path');

      require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
        const files = {};

        function readDirectory(directory) {
          fs.readdirSync(directory).forEach((file) => {
            const fullPath = path.resolve(directory, file);

            if (fs.statSync(fullPath).isDirectory()) {
              if (scanSubDirectories) readDirectory(fullPath);

              return;
            }

            if (!regularExpression.test(fullPath)) return;

            files[fullPath] = true;
          });
        }

        readDirectory(path.resolve(__dirname, base));

        function Module(file) {
          return require(file);
        }

        Module.keys = () => Object.keys(files);

        return Module;
      };
    }

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

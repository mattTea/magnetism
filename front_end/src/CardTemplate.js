import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react'
import values from './sample.json'

var response = values

fetch('http://localhost:5000/topics')
   .then((response) => response.json())
   .then(function(response) {
     console.log(response);
   })
   .catch((error) => {
     console.error(error);
   });
//   // .then((response) => response.json())
//   // .then((jsonData) => {
//   //   // jsonData is parsed json object received from url
//     // console.log(jsonData)
//   // })
//   // .catch((error) => {
//   //   // handle your errors here
//   //   console.error(error)
//   // })
//
//   console.log("after fetch");


function CardTemplate(props) {
  return(
    <Card>
      <Image src='https://timedotcom.files.wordpress.com/2017/10/229-westerlund-21.jpg?w=1520&quality=85&h=1139' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{response.name}</Card.Header>
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
  );
}

export default CardTemplate;

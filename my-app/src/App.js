import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react'


function App() {
  // return
  // (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // )
  return(
    <Card>
      <Image src='https://timedotcom.files.wordpress.com/2017/10/229-westerlund-21.jpg?w=1520&quality=85&h=1139' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Physics</Card.Header>
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

export default App;

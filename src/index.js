import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import TopicsPage from './pages/TopicsPage.js'
import SubTopicsPage from './pages/SubTopicsPage.js'
import './App.css';


ReactDOM.render(
  <BrowserRouter>
        <Route exact path="/" component={TopicsPage} />
        <Route path="/subtopics" component={SubTopicsPage} />
  </BrowserRouter>,
  document.getElementById('app')
);

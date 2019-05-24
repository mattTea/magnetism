import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import TopicsPage from './pages/TopicsPage.js'
import SubTopicsPage from './pages/SubTopicsPage.js'
import ResourcesPage from './pages/ResourcesPage.js'
import './App.css';

ReactDOM.render(
  
  <BrowserRouter>
        <Route exact path="/topics" component={TopicsPage} />
        <Route exact path="/topics/:topic_id/subtopics" component={SubTopicsPage} />
        <Route exact path="/topics/:topic_id/subtopics/:subtopic_id/resources" component={ResourcesPage} />

  </BrowserRouter>,
  document.getElementById('app')
);

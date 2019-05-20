import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import TopicsPage from './pages/TopicsPage.js'
import SubTopicsPage from './pages/SubTopicsPage.js'
import './App.css';


ReactDOM.render(
  <div>
    <TopicsPage />,
    <SubTopicsPage />
  </div>,
    document.getElementById('app')
);

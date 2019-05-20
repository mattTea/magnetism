import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import TopicsPage from './pages/TopicsPage'
// import SubTopicsPage from './pages/SubTopicsPage'

export default function App() {
  console.log("App.js")
  return (
    <Switch>
      <Route exact path="/" component={TopicsPage} />
    
    </Switch>
  )
}

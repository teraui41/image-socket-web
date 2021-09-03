import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppScreen from '../AppScreen';
import AdminScreen from '../AdminScreen';

const MainScreen = props => {
  return (
    <Router>
      <Switch>
      <Route
         exact
         path='/'
         render={
          props => {
            return <AppScreen {...props }/>
          }
        }/>
        <Route
         exact
         path='/app'
         render={
          props => {
            return <AppScreen {...props }/>
          }
        }/>
        <Route
         exact
         path='/admin'
         render={
          props => {
            return <AdminScreen {...props }/>
          }
        }/>
      </Switch>
    </Router>
  )
}

export default MainScreen;

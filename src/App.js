import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Navbar from './components/header/Navbar';
import Form from './components/Forms/Form';
import AllRooms from './components/Rooms/AllRooms';




function App() {
  return (
    <>
    <Router >
      <Navbar />
        <Switch>
          <Route exact path='/' component={ Home } /> 
          <Route path='/login' component={ Login } />
          <Route path='/sign-up' component={ Form } />
          <Route path='/rooms' component={ AllRooms } />

        </Switch>   
        
    </Router>

    </>
  );
}
export default App;
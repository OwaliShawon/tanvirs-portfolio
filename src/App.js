
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function App() {
  return (
   <div>
     <Header></Header>

{/* Routing items */}
     <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    {/* Footer */}
    
   </div>
  );
}

export default App;

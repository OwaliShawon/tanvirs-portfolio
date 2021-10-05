
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function App() {
  return (
   <div>
     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/home">Tanvir Ahmed</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/aboutme">About Me</Nav.Link>
        <Nav.Link href="#mymission">My Mission</Nav.Link>
        <Nav.Link href="#myblog">My Blog</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

{/* Routing items */}
     <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="#aboutme">
            <AboutMe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
   </div>
  );
}

export default App;

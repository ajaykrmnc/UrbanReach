import React, { useState }  from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from 'react-bootstrap'
import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Buysell from './buy-sell';
import Blog from './Blog';
// import People from './people';
import './style/Header-style.css';
import logo from './pic/logo.png'

import Apply from "./Apply";
import Career from "./career";
import GetData from "./GetApply";


const Header = ()=> {
  return (
    
    <BrowserRouter>
    <div className="App" >
      
    <Navbar expand="lg">

    <Container>
      <Navbar.Brand style={{paddingLeft: '0px'}} className="nav-link urban" as={Link} to="/" > <img src={logo} alt=' ' style={{width: "4rem"}}/>Urban Reach</Navbar.Brand>
      <Navbar.Toggle style={{justifyContent: 'flex-start'}}  />
      <Navbar.Collapse >
      <Nav >
        <Nav.Link className="nav-link" as={Link} to="/" >Home</Nav.Link>
        <Nav.Link className="nav-link" as={Link} to="/about" >About Us</Nav.Link>
        <Nav.Link className="nav-link" as={Link} to="/buysell" >Buy/Sell </Nav.Link>
        <Nav.Link className="nav-link" as={Link} to="/Blog" >Blog </Nav.Link>
        <Nav.Link className="nav-link" as={Link} to="/Career" >Career </Nav.Link>
        <Nav.Link className="nav-link" as={Link} to="/Contact" >Contact </Nav.Link>
        <Nav.Link className="nav-link" as={Link} to="/getdata" >Getdata </Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
    
  </Navbar>
    
  <div>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route exact path="/" element={<Home />}/>
      <Route path="/buysell" element={<Buysell/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/Career" element={<Career/>}/>
      <Route path="/apply" element={<Apply />} />
      <Route path="/getdata" element={<GetData />} />
    </Routes>
  </div>
    </div>
    </BrowserRouter>
  );
}

export default Header;

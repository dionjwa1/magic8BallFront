// import logo from './logo.svg';
import './App.css';
import {Container, Row, Col}  from 'react-bootstrap';
import React from 'react';

function App() {
  return (
  <>
<Container fluid="md">
  <Row>
    <Col>Dion Magic</Col>
    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
  </Row>
</Container>
 
Dion's Magic App...Coming Soon!
</> );

}

export default App;

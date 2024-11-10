import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 return (
  <Navbar bg="light" data-bs-theme="light">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  </Container>

    <div className="app-container">
      
    </div>
    </Navbar>
  );

      
}

export default App

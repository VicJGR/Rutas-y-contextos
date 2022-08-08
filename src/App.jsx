import { Navbar, Nav, Container, Button} from 'react-bootstrap';

import { Outlet, Link } from "react-router-dom";
import {useState} from 'react'
// datos y contexto para traducciones
import diccionario from "./components/diccionario";
// contexto donde guardaremos la función traduce y el idioma actual
import TraductorContext from "./components/TraductorContext";

function App() {
  // idioma actual, state
  const [idioma, setIdioma] = useState(0);
  // función traduce, devuelve el string correspondiente a la etiqueta e idioma facilitados
  const traduce = (etiqueta) => diccionario[etiqueta][idioma];



  return (
  <>
  <TraductorContext.Provider value={{ traduce, idioma }}>
    <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/Collserola" className='nav-link'>Collserola</Link>
              <Link to="/Delta" className='nav-link'>Delta</Link>
              <Link to="/Garraf" className='nav-link'>Garraf</Link>
              <Link to="/Montseny" className='nav-link'>Montseny</Link>
              <Link to="/Montserrat" className='nav-link'>Montserrat</Link>
              <Link to="/Pedraforca" className='nav-link'>Pedraforca</Link>
              <Link to="/SantLloren" className='nav-link'>SantLlorenç</Link>
              <Link to="/Vallvidrera" className='nav-link'>Vallvidrera</Link>
            </Nav>
          </Navbar.Collapse>
          <div className="text-end">
            <Button
              size="sm"
              variant={idioma === 0 ? "primary" : "outline-primary"}
              onClick={() => setIdioma(0)}
            >
              ES
            </Button>{" "}
            <Button
              size="sm"
              variant={idioma === 1 ? "primary" : "outline-primary"}
              onClick={() => setIdioma(1)}
            >
              CA
            </Button>
          </div>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Outlet />
      </Container>
      </TraductorContext.Provider>
   

  </>
    
  )
}

export default App

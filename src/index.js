import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Routes from './Routes/Routes';
import Navbar from './components/Navbar/Navbar';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
        <>
          <Navbar />
          <Container className="mt-3 d-flex justify-content-center">
            <Row>
              <Col>
                <Routes />
              </Col>
            </Row>
          </Container>
        </>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

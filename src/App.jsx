// src/App.jsx
import { useState } from 'react';
import {
  Container,Card,Row,Col,Image,Form,InputGroup,Button,
} from 'react-bootstrap';

import './App.css'; 
import images from '/gambar.jpg'; 

function App() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Login Berhasil (simulasi)! Email: ' + email + ', Password: ' + password);
   
  };

  return (
    <div className="bg-light d-flex align-items-center justify-content-center w-100" style={{ minHeight: '100vh' }}>
      <Container>
        <Card className="shadow-lg border-dark rounded-3 my-5">
          <Row className="g-0">
            {}
            <Col md={6} className="d-none d-md-block">
              <Image
                src={images}
                alt="Gambar Login"
                className="rounded-start w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </Col>

            {}
            <Col md={6}>
              <Card.Body className="p-4 p-sm-5">
                <div className="text-center mb-4">
                  <h3 className="fw-bold">Institut Widya Pratama</h3>
                  <p className="text-muted">Welcome Back!</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  {}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="icon-email">
                     {}
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Alamat Email"
                      aria-label="Alamat Email"
                      aria-describedby="icon-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>

                  {}
                  <InputGroup className="mb-4">
                    <InputGroup.Text id="icon-password">
                     {}
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Kata Sandi"
                      aria-label="Kata Sandi"
                      aria-describedby="icon-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </InputGroup>

                  {}
                  <div className="d-grid">
                    <Button variant="primary" type="submit" size="lg" className="fw-bold rounded-pill">
                      Login
                    </Button>
                  </div>
                </Form>

                {}
                <div className="text-center mt-3">
                  <a href="#" className="text-decoration-none small">Forgot Password?</a>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default App;
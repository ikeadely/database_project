import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Login = () => { 
  const navigate = useNavigate()
  return (
   
    <div className="cover" >
    <Container id="main-container" className="d-grid h-100" style={{ marginTop: "150px"}}>
    <Form id="Login" className="text-center w-100">
            <h1 className="fs-2 fw-normal"> DATA SEKOLAHAN </h1>
      <Form.Text className="text-muted">
        Jika anda adalah Admin Kepustakan, silahkan masuk melalui form ini.
      </Form.Text>
    <Form.Group className="mb-3" >
      <Form.Control type="name" placeholder="username" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="password" />
    </Form.Group>
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Anda admin?" />
    </Form.Group> */}
    <Button variant="success" type="submit" onClick={() => {navigate("/home");}}>Masuk</Button>
  </Form>
  </Container>
  </div>
 
  );
  }

  export default Login;
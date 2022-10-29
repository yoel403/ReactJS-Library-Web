import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/components/formcomp.css"
import { Link } from "react-router-dom";

const Formscomp = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className="d-flex align-items-center checkout" label="Check me out" />
      </Form.Group>
      <Link to="/Home"><Button className="login" variant="primary" type="submit">Login</Button></Link>
      <Link to="/Register"><Button type="submit" className="signup">Sign Up</Button></Link>
    </Form>
  )
}

export default Formscomp
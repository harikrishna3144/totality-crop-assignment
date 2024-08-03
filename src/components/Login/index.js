

import React, { useState } from 'react'
import { Container, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Login = () => {
    const [show1, setShow1] = useState(true);

    const handleClose1 = () => setShow1(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const handleSubmit = (event)=> {
        event.preventDefault();
        alert("Thank's for Login ...")
    }


  return (
    <div>
        <Container>
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton1 >

                <Container className='d-flex justify-content-center align-items-center'>
                    <Modal.Title className='text-success text-center fw-bold'>Login Form</Modal.Title>
                </Container>
            </Modal.Header>

            <Modal.Body>
            <Form className='p-4' onSubmit={handleSubmit}>
    

            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1' >
              <Form.Label className='fw-bold'>Email</Form.Label>
              <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter Your Email' autoFocus required />
            </Form.Group> 

            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1' >
              <Form.Label className='fw-bold'>Mobile Number</Form.Label>
              <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Enter Your Mobile Number' autoFocus required />
            </Form.Group>

            <Form.Group className='mb-3 ' controlId='formBasicCheckbox' >
              <div className='d-flex'>
                <Form.Check className='me-2' type='checkbox' label="Don't have an account?"/>
                    <Link >Sign Up.</Link>
              </div>
            </Form.Group>

            <div className='bg-primary p-2 rounded mt-4 d-flex justify-content-center align-items-center'>
              <button type='submit' className='btn btn-primary btn-submit'>Submit</button>
            </div>

          </Form>
            </Modal.Body>



            </Modal>
        </Container>
    </div>
  )
}

export default Login



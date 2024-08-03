
import "./index.css"

import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank's for contact")
  }


  return (
    <div className='contact-container mt-5'>
      <div className='sub-container ps-3 shadow'>
        <div>
        <img className='contact-img' src="images/contact.png" alt='...' />
        </div>
        <div className='p-2'>
          <Form className='p-4' onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1' >
              <Form.Label className='fw-bold'>Name</Form.Label>
              <Form.Control type='text' placeholder='Enter Your Name' autoFocus required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1' >
              <Form.Label className='fw-bold'>Email</Form.Label>
              <Form.Control type='email' placeholder='Enter Your Email' autoFocus required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1' >
              <Form.Label className='fw-bold'>Mobile Number</Form.Label>
              <Form.Control type='text' placeholder='Enter Your Mobile Number' autoFocus required />
            </Form.Group>

            <Form.Group className='mb-3 ' controlId='formBasicCheckbox' >
              <div className='d-flex flex-column'>
                <div className='text-danger fw-bold'>The bestseller's <Link to="/">Keep Shopping</Link></div>
                <div className='text-warning'>Please Contact <span>91+ 6303188765</span></div>
              </div>
            </Form.Group>

            <div className='bg-primary p-2 rounded mt-4 d-flex justify-content-center align-items-center'>
              <button type='submit' className='btn-submit'>Submit</button>
            </div>

          </Form>
        </div>
      </div>
    </div>
  )
}

export default Contact




































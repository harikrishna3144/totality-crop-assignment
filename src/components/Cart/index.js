import React, { useState } from 'react'
import { Container, Offcanvas } from 'react-bootstrap'
import "./index.css"
import { Link } from 'react-router-dom';

const Cart = ({cart, incrementQuantity,decrementQuantity,removeItem}) => {
    // console.log(cart)
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false)
  return (
    <div>
        <Container className='vh-100' fluid>
          <Offcanvas show={show} onHide={handleClose} >
            <Offcanvas.Header closeButton className='bg-dark text-light'>
              <Offcanvas.Title className='text-warning fw-bold'>Cart Details List</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Container className='car-container'>
                {cart.length === 0 ? 
              <div style={{height:400}} className='d-flex justify-content-center align-items-center'>
                <div className='fw-bold text-danger fs-5'>Your Cart is Empty ...</div>

              </div>  : 
              <div>
                {cart.map((item) => (
                  <li className='mb-2 shadow rounded p-2' key={item.id}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <img className='cart-image' src={item.image} alt='...' />
                      <div className='ms-2 me-2 text-secondary fw-semibold '>${item.price}/<span className='text-danger'>1 Product</span></div>
                      <div className='d-flex'>
                        <div className='d-flex'>
                          <button className='btn btn-sm btn-primary me-2' onClick={() => decrementQuantity(item.id)}>-</button>
                          <div className='text-dark'>{item.quantity}</div>
                          <button className='btn btn-sm btn-primary ms-2' onClick={() => incrementQuantity(item.id)}>+</button>
                        </div>
                        <div>
                          <div className='remove-btn ms-5 fa-solid fa-delete-left' onClick={() => removeItem(item.id)}></div>
                        </div>
                      </div>


                    </div>
                  </li>
                ))}
              </div>
              }
              <div>
                
              </div>
              </Container>
            </Offcanvas.Body>
            <Container className='bg-dark p-2 d-flex justify-content-around' >
              <button className='btn p-2'><Link to="/checkout" style={{textDecoration:'none'}} className='text-warning fw-bold' >Checkout</Link></button>
              <button className='btn p-2'><Link to="/" style={{textDecoration:'none'}} className='text-primary fw-bold' >Keep Shopping</Link></button>

            </Container>
          </Offcanvas>
        </Container>
    </div>
  )
}

export default Cart
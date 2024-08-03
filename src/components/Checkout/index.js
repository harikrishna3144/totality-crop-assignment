

import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "./index.css"
const Checkout = ({cart}) => {
    //console.log(cart)

    let totalPrice = 0;
    let totalQuantity = 0;

    //console.log(cart.length)
    if(cart.length >= 0){
        for(let item of cart){
            totalQuantity += item.quantity;
            totalPrice += parseInt(item.price);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thank yoy for shopping!")
    }

  return (
    <div className='mt-5'>
        <Link to="/"><button className='btn btn-primary mt-3 fw-bold ms-4'>Keep Shopping</button></Link>
        <div className='main-container p-4'>
            <div className='w-50 bg-dark p-3 list-cart'>
                <h2 className='text-center text-warning fw-bold'>Products in Cart</h2>
                <div className='items-container'>
                    {cart.map((item) => (
                        <li className='mt-4' key={item.id}>
                            <div className='d-flex justify-content-between p-2 align-items-center rounded shadow bg-light w-100'>
                                <img className='checkout-img' src={item.image} alt='...' />
                                <div>
                                    <div className='fw-bold text-primary'>Product 1 <span className='text-success'>${item.price}</span></div>
                                </div>
                                <div>
                                    <div className='text-danger fw-bold me-2'>{item.quantity}</div>
                                </div>
                                <div>
                                    <p className='fw-bold text-warning'>${item.quantity * item.price}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
            <div className='w-50 checkout-form p-2'>
                <h2 className='text-center'>Checkout Your Details!</h2>
                <form onSubmit={handleSubmit} className='bg-light m-3 shadow rounded p-3'>
                    <div>
                        <label className='form-label' htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' placeholder='Enter your name' />
                    </div>
                    <div>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <input className='form-control' type='email' id='email' placeholder='Enter your email' />
                    </div>
                    <div>
                        <label className='form-label' htmlFor='address'>Address</label>
                        <input className='form-control' type='text' id='address' placeholder='Enter your address' />
                    </div>

                    <Row>
                        <Col className='d-flex'>
                        <div>
                            <label className='form-label'>Country</label>
                            <select className='form-control'>
                                <option>Choose ...</option>
                                <option>India</option>
                                <option>U.S.A</option>
                                <option>London</option>
                            </select>
                        </div>

                        <div className='ms-4'>
                            <label className='form-label'>City</label>
                            <select className='form-control'>
                                <option>Choose ...</option>
                                <option>Tirupati</option>
                                <option>Hyderabad</option>
                                <option>Kurnool</option>
                            </select>
                        </div>
                        </Col>
                    </Row>
                    <hr/>
                    <div className='d-flex justify-content-between'>
                        <div className='fw-bold'>Total Quantity</div>
                        <div className='fw-bold text-primary'>{totalQuantity}</div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='fw-bold'>Total Price</div>
                        <div className='fw-bold text-danger'>{totalPrice}/-</div>
                    </div>
                    <div className='d-flex flex-column justify-content-center mt-3'>
                        <button type='submit' className='text-white btn btn-success'>CHECKOUT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Checkout


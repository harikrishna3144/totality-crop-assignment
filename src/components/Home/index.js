/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable react/jsx-no-comment-textnodes */

import React from 'react'
import {  Col,  Row, Table } from 'react-bootstrap'
import "./index.css"


const Home = ({search,products, addToCart}) => {
  return (
    <div className='home'>

        <Row>
            <Col>
            <section>
                <div>
                    <h3 className='text- mt-4 ms-2 fw-bold p-2'>The Best Products</h3>
                    <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Products</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {products.filter((product) => {
              return search.toLowerCase() === "" ? product : product.name.toLowerCase().includes(search);
            }).map((product) => (
              <tr key={product.id}>
                <td>
                  <img  height={100} width={150} src={product.image} alt='...'/>
                </td>
                <td>
                <div className='d-flex btn-background justify-content-center align-items-center'>
                  {product.name}
                  </div>
                  </td>
                <td>
                <div className='d-flex btn-background justify-content-center align-items-center'>
                  {product.category}
                  </div>
                  </td>
                <td>
                <div className='d-flex btn-background justify-content-center align-items-center'>
                  {product.price}
                  </div>
                  </td>
                  
                <td>
                <div className='d-flex btn-background justify-content-center align-items-center'>
                <button onClick={() => addToCart(product)} className='btn btn-primary '>Book Now</button>
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
                    {/* <div className='row'>
                        {products.map((product) => (
                            <li className='col-md-4 mb-4' key={product.id}>
                                <div className='card'>
                                    <img className='item-img' src={product.image} alt={product.id} />
                                    <div className='card-body'>
                                        <h5 className='card-title'>{product.name} - {product.price}/-</h5>
                                        <p className='card-text'>{product.description}</p>
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div> */}
                </div>
            </section>
            </Col>
        </Row>
    </div>
  )
}

export default Home




















import "./index.css"
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-container'>
      <div className='sub-container shadow p-5'>
        <h2 className='fs-1 text-warning'>About US</h2>
        <p className='text-success fs-5 fw-bold'>We are Delivered thousands of products through the online shopping worldwide.</p>
        <p>The all-in-one commerce platform to start, run and grow a business.</p>

        <button className='fw-bold btn btn-primary'><Link to="/" style={{textDecoration:'none',color:'#fff'}} >Shop Now</Link></button>
      </div>
    </div>
  )
}

export default About

































 import React, { useState } from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"

 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
//  import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalProvider } from './components/GlobalProvider';
 import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';

const products = [
  {
    "id": "1aa9",
    "image": "images/Watch.jpg",
    "name": "Black / Watch",
    "category": "made in India",
    "price": 999,
    "quantity": "1"
  },
  {
    "id": "ce66",
    "name": "Red Shoe",
    "image": "images/Red shoe.avif",
    "category": "India",
    "price": "499",
    "quantity": "2"
  },
  {
    "id": "6aea",
    "name": "Gold Chain ",
    "image": "images/gold-chain.jpg",
    "price": "149000",
    "quantity": "3",
    "category": "made in India"
  },
  {
    "id": "7df3",
    "name": "Red T-shirt",
    "image": "images/Red T-shirt.jpg",
    "price": "349",
    "quantity": "3",
    "category": "India"
  },
  {
    "id": "2ev5",
    "name": "Silver / Watch",
    "image": "images/watch.avif",
    "price": "9000",
    "quantity": "3",
    "category": "Made in China"
  },
  {
    "id": "2hd8",
    "name": "White / Shoe",
    "image": "images/Shoes.avif",
    "price": "1999",
    "quantity": "3",
    "category": "India"
  }
]



 
 function App() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  //console.log(cart)
  const searchResult = () => {
    setSearch(search)
  }

  const addToCart = (product) => {
    //console.log(product)
    const existingProduct = cart.find((item) => item.id === product.id);
    if(existingProduct){
      setCart((prevCart) => prevCart.localeCompare((item) => item.id === product.id ? {...item, quantity:item.quantity + 1} : item));
    }else{
      setCart((prevCart) => [...prevCart, {...product, quantity: 1}]);
    }
  }

  const incrementQuantity = (productId) => {
    setCart((prevCart) => prevCart.map((item) => item.id === productId ? {...item, quantity:item.quantity + 1} : item))
  }

  const decrementQuantity = (productId) => {
    setCart((prevCart) => prevCart.map((item) => item.id === productId ? {...item, quantity:item.quantity - 1} : item))
  }

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }


   return (
    <GlobalProvider>
      <Router>
      <Navbar fixed='top' expand="lg" className="bg-body-tertiary navbar">
       <Container fluid>
         <Navbar.Brand href="/">
          <div className='d-flex justify-content-center main-logo align-items-center'>
             <div className='bg-dark logo-name'>
               <h4>TC</h4>
             </div>
             <div>
               <h4 className='fw-bold brand-name'>Totality Corp</h4>
             </div>
           </div>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto">
            <Row>
              <Col xs="auto">
              <div className='d-flex bg-dark main-search ps-1 rounded align-items-center'>
                <div className='bg-dark'>
                   <input onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search' className='search-input ' />
                 </div>
                 <div className='p-2 bg-dark'>
                     <button onClick={searchResult} className='bg-dark text-white search-btn fas fa-search'></button>
                   </div>
                </div>
              </Col>
            </Row>
            <Nav.Link><Link className=' list' to="/">Home</Link></Nav.Link>
            <Nav.Link> <Link className=' list' to="/about">About</Link></Nav.Link>
            <Nav.Link> <Link className=' list' to="/contact">Contact</Link></Nav.Link>
                 <div className='d-flex'>
                 <Nav.Link> <Link className=' list' to="/login">Login</Link></Nav.Link>

                 </div>
                 <Nav.Link> <Link className='fas fa-shopping-cart list1 list text-dark' to="/cart"><span className='count fw-bold'>{cart.length}</span></Link></Nav.Link>

           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
     <div className='  pt-2'>
      <Routes>
        <Route exact path='/' element={<Home search={search} products={products} addToCart={addToCart} />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem} />} />
        <Route path='/checkout' element={<Checkout cart={cart} />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
     </div>
      </Router>
    </GlobalProvider>

   );
 }
 
 export default App;


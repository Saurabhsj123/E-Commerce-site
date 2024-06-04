import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router  } from 'react-router-dom';
import Rout from './Rout';
import Footer from './Components/Footer';
import { useState } from 'react';
import Productdetail from './Components/Productdetails';

function App() {

  const [cart, setCart] = useState([])

  const [close, setClose] = useState(false)

  const [detail, setDetail] = useState([])
  
  const [product, setProduct] = useState(Productdetail)

  // Product deatails
  const view =(product)=>{
    setDetail([{...product}])
    setClose(true)
  }

  // Add to cart

  const addtocart=(product)=>{
      
    const exist = cart.find((x) =>{
      return x.id === product.id
    })

    if(exist){
      alert("This Product is already added to cart")
    }
    else{
      setCart([...cart, {...product, qty:1 }])
      alert("Product is added to cart")
    }
  }

  return (
      <>
      <Router>
        <Nav/>
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} />
        <Footer/>
      </Router>
      </>
  );
}

export default App;

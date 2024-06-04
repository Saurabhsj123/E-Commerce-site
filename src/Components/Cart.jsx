import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import './Cart.css'

function Cart({cart, setCart}) {
    // increase qty
    const incqty = (product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id
    })
        setCart(cart.map((data)=>(
            data.id === product.id ? {...exist, qty: exist.qty + 1}: data
        )))
    }
    // decrease qty
    const decqty = (product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id
    })
        setCart(cart.map((data)=>(
            data.id === product.id ? {...exist, qty: exist.qty - 1}: data
        )))

    }

    // remove product
    const removeproduct = (product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        if(exist.qty > 0){
            setCart(cart.filter((x)=>{
                return x.id !== product.id
            })
            )
        }
    }


  return (
    <div className="cart-container">
        {cart.length === 0 && 
            <div className="emptycart">
                <h2 className="empty">Cart is Empty</h2>
                <NavLink to="/product" className="emptycartbtn" >Shop Now</NavLink>
            </div>
        }
        <div className="content">
            { cart.map((data)=>(
                  <div className="cart-item" key={data.id}>
                    <div className="img-box">
                        <img src={data.img} alt={data.Title} />
                    </div>
                    <div className="detail">
                        <div className="info">
                            <h4>{data.Cat}</h4>
                            <h3>{data.Title}</h3>
                            <p>Prize: {data.Prize} </p>
                        <div className="qty">
                            <button className="inc" onClick={()=>incqty(data)}>+</button>
                            <input type="text" value={data.qty}></input>
                            <button className="dec" onClick={()=>decqty(data)}>-</button>
                        </div>
                        <div className="total">                            
                             <h4>Total : Rs.{data.Prize * data.qty }  </h4>
                             <button className="buy"> Buy Now </button>
                        </div>
                        </div>
                        <div className="close">
                             <button onClick={()=> removeproduct(data)}><AiOutlineClose/></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cart;

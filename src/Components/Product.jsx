import React, { useState } from 'react'
import './Product.css'
import { AiOutlineCloseCircle, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import Productdetail from './Productdetails'

function Product({product, setProduct, detail, view , close , setClose, addtocart}) {

    const filterproduct = (product)=>{
        const update = Productdetail.filter((x)=>{
          return  x.Cat === product 
        })
        setProduct(update)
    }

    const AllProducts= ()=>{
        setProduct(Productdetail)
    }

  return (
    <>
    {
        close ? 
        <div className="product-detail">
        <div className="container">
            <button onClick={()=> setClose(false)} className='closebtn'><AiOutlineCloseCircle/></button>
            
            {detail.map((data)=>(
                
                <div className="productbox">
                    <div className="img-box">
                        <img src={data.img} alt={data.Title} />
                    </div>
                    <div className="detail">
                        <h4>{data.Cat}</h4>
                        <h2>{data.Title}</h2>
                        <p>A Screen Everyone Will Love : Wheather your family is streaming or video chatting with friends tablet AB... </p>
                        <h3>{data.Prize}</h3>
                        <button className="btn1">Add To Cart</button>
                        <button className="btn2">Buy Now</button>
                    </div>
                </div>
            
            ))}
            <div className="productbox">

            </div>
        </div>
    </div> : null
    }

    <div className="products">
    <h3># Products</h3>
    <p>Home . products</p>
        <div className="container">
            <div className="filter">
                <div className="categories">
                    <h3>Categories</h3>
                    <ul>
                    <li onClick={()=> AllProducts()}>All Products</li>
                        <li onClick={()=> filterproduct("Tablet")}>Tablet</li>
                        <li onClick={()=> filterproduct("Electronics")}>Electronics</li>
                        <li onClick={()=> filterproduct("Headphone")}>Headphone</li>
                        <li onClick={()=> filterproduct("Laptop")}>Laptop</li>
                        <li onClick={()=> filterproduct("Smart Watch")}>Smart Watch</li>
                        <li onClick={()=> filterproduct("Mobile")}>Mobile</li>
                        <li onClick={()=> filterproduct("Camera")}>Camera</li>
                    </ul>
                </div>
            </div>

            <div className="productbox">
                <div className="content">
                    {product.map((data)=>(
                           
                        <div className="box" key={data.id}>
                        <div className="img-box">
                            <img src={data.img} alt={data.Title}/>
                            <div className="icon">
                            <li onClick={()=> addtocart(data)}><AiOutlineShoppingCart/></li>
                            <li onClick={()=> view(data)}><BsEye/></li>
                            <li><AiOutlineHeart/></li>
                            </div>  
                        </div>  
                        <div className="detail">
                            <p>{data.Cat}</p>
                            <h3>{data.Title}</h3>
                            <h4>{data.Prize}</h4>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product

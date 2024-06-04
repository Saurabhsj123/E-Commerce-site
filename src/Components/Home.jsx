import React from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import Homeproduct from "./Homeproduct";
import "./Home.css";

function Home({ detail, view , close , setClose, addtocart}) {

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


      <div className="top-banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note book Collection 2024</h2>
            <NavLink to="/product" className="link">
              Shop Now <BsArrowRight />{" "}
            </NavLink>
          </div>
          <div className="img-box">
            <img src="tab2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="product-type">
        <div className="container">
          <div className="box">
            <div className="img-box">
              <img src="iphone.webp" alt="mobile" />
            </div>
            <div className="detail">
              <p>23 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="headphone.jpg" alt="headphone" />
            </div>
            <div className="detail">
              <p>52 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="smart-watch.jpg" alt="watch" />
            </div>
            <div className="detail">
              <p>18 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="speaker.jpg" alt="speaker" />
            </div>
            <div className="detail">
              <p>32 Products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Order above Rs 1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h3>return & refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Membor Discount</h3>
              <p>On every order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
              {Homeproduct.map((data)=>(
                
              <div className="box" key={data.id}>
                <div className="img-box">
                  <img src={data.img} alt={data.Title}/>
                  <div className="icon">
                    <li onClick={()=> addtocart(data)}><AiOutlineShoppingCart/></li>
                    <li onClick={()=>view(data)}><BsEye/></li>
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

      <div className="banner">
        <div className="container">
        <div className="detail">
              <h4>LATEST TECHNOLOGY ADDED</h4>
              <h3>Apple iPad 10.2 9th gen - 2021</h3>
              <p>76600 Rs</p>
              <NavLink to="/product" className="link">Shop Now <BsArrowRight/> </NavLink>
        </div>
        <div className="img-box">
          <img src="tab2.jpg" alt="" />
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;

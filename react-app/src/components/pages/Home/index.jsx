import React, { useEffect } from "react";
import "./style.css";
import Navbar from "../../shared/Navbar/index";
import Footer from "../../shared/Footer";

import { useSelector, useDispatch } from "react-redux";

import { getAllItens } from "../../../store/fetchAction";

import { addItemToCart } from "../../../store/ducks/cart";

const HomeSection = () => {
  const itemStore = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  window.localStorage.setItem('item', JSON.stringify(cart))
  
  useEffect(() => {
    dispatch(getAllItens());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="home-content">
        <img src="https://images.pexels.com/photos/6373686/pexels-photo-6373686.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> 
        <div className="section-produtos">
          <h2>Produtos</h2>
          <div className="section-produtos-card">
            {itemStore.map((item) => {
              return (
                <div className="card-section-produtos" key={item.id}>
                  <img src={item.url} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>R$ {item.price},00</p>
                  <div>
                  <button onClick={()=> dispatch(addItemToCart(item))}>+</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeSection;

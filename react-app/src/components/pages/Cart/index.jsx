import React, { useEffect } from "react";
import "./style.css";
import Navbar from "../../shared/Navbar/index";
import Footer from "../../shared/Footer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getAllItens } from "../../../store/fetchAction";
import { removeItemFromCart, updateCartAdd, updateCartRemove } from "../../../store/ducks/cart";

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(getAllItens());

  }, [dispatch]);
  



  function removeItemCart(item){
    dispatch(removeItemFromCart(item))
  }
  function updateItemCartRemove(item){
    dispatch(updateCartRemove(item))
  }
  function updateItemCartAdd(item){
    dispatch(updateCartAdd(item))
  }



  return (
    <>
      <Navbar />
      <div className="cart-section-main">
        <div className="cart-section-content">
          <h1>Seu carrinho</h1>
            {
              cart.length === 0 ? <div>Seu carrinho está vazio... </div> :
              (
                <>
                {
                  cart.map(item =>(
                    <div className="cart-section" key={item.product.id}>
                    <div className="cart-section-item">
                      <img src={item.product.url} alt="" />
                      <div>
                        <h4>{item.product.name}</h4>
                        <small>{item.product.description}</small>
                      </div>
                      <small>
                      <button className="button-cart-updateAdd" onClick={()=> updateItemCartAdd(item.product.id)}>+</button>
                        {item.quantity}
                        <button disabled={item.quantity === 1} className="button-cart-updateRemove" onClick={()=> updateItemCartRemove(item.product.id)}>-</button>
                      </small>
                      <div>x</div>
                      <div><small>R${item.product.price},00</small></div>
                      <div>=</div>
                      <div>
                        <p>Total</p>
                        <small>R${item.quantity * item.product.price},00</small>
                      </div>
                      <div>
                        <button className="button-cart-remove" onClick={()=> removeItemCart(item.product.id)}><h3>X</h3></button>
                      </div>
                    </div>
                  </div>
                  ))
                }
                </>
              )
            }
          <div className="finish-cart">
            <h3>
              <Link to="/">Continue comprando</Link>
            </h3>
            {
              cart.length === 0 ? <></> : (
                <h3>
                <Link to="/">Finalizar Compra</Link>
              </h3>
              )
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

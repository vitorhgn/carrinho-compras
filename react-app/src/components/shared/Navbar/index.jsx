import React from "react";
import "./style.css";
import {Link, Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";

import { auth } from "../../../Firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
const Navbar = () => {

  const [user] = useAuthState(auth)


  function logout() {
   auth.signOut()
  } 
  const length = useSelector(state => state.cart.length)

  return (
    <nav className="nav-shared">
      <h3>Inicio</h3>
      <ul>
        <li><Link to={"/"}>Produtos</Link></li>
        <li><Link to={"/cart"}>Carrinho <span><strong>{length}</strong></span></Link></li>
        <li><Link to={"/add"}>Adicionar produtos</Link></li>
        {
          user ? <></> : <li><Link to={"/Login"}>Login</Link></li>
        }
      </ul>
      <div>
      {
    user ? <><p>{auth.currentUser.displayName}</p>
    <img src={auth.currentUser.photoURL} alt="" /></> : <>
    </>
  }

        <ul>
          <li><Link onClick={() => logout()}>Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

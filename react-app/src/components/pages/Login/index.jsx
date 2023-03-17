import React from "react";
import "./style.css";
import Navbar from "../../shared/Navbar";
import { auth, provider } from "../../../Firebase";


const Login = () => {
  const submit = () => {
    auth.signInWithRedirect(provider).catch(alert);
  };



  return (
    <>
      <Navbar />
      <div className="main-content-login">
        <div className="form-content-box">
          <form className="form-login" action="">
            <div className="label-login">
              <label htmlFor="user">Usuário:</label>
              <input type="text" name="user" id="user" />
            </div>
            <div className="label-login">
              <label htmlFor="password">Senha:</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="Login-Auth">
              <div onClick={submit}>Github</div>
              <div>Gmail</div>
              <div>Twitter</div>
            </div>
            <div className="button-form-login">
                <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

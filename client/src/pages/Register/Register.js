import React from "react";
import Add from "../../img/add.png";

function Register() {
  //htmlFor - is place holder for files
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Simple Chat</span>
        <span className="title"> Register</span>
        <form>
          <input type="text" placeholder="Please enter username" />
          <input type="email" placeholder="Please enter email" />
          <input type="password" placeholder="Please enter password" />
          <input style={{ display: "none" }} type="file" id="file" />

          <label htmlFor="file">
            <img src={Add} alt="" />
            <span> Add an avatar</span>
          </label>
          <button> Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;

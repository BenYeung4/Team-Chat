import React from "react";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Simple Chat</span>
        <span className="title"> Login </span>
        <form>
          <input type="text" placeholder="Please enter username" />
          <input type="password" placeholder="Please enter password" />

          <button> Sign in</button>
        </form>
        <p>Don't have an account? Sign up!</p>
      </div>
    </div>
  );
}

export default Login;

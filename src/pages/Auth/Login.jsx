import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="auth-left img-container">
        <img
          className="auth-img"
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
          alt=""
        />
        <Link to="/" className="auth-back">
          Home
        </Link>
      </div>
      <div className="auth-right">
        <h2 className="auth-title">Login</h2>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={fields.password}
            onChange={(e) => setFields({ ...fields, password: e.target.value })}
          />
        </div>
        <button type="submit">Login</button>
        <div className="auth-redirect">
          Haven't an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const [fields, setFields] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="auth-left">
        <h2 className="auth-title">Register</h2>
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={fields.username}
            onChange={(e) => setFields({ ...fields, username: e.target.value })}
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
        <button type="submit">Register</button>
        <div className="auth-redirect">
          Have an account? <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="auth-right">
        <img
          className="auth-img"
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
          alt=""
        />
      </div>
    </form>
  );
};

export default Register;

import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { RiFridgeFill } from "react-icons/ri";
import "./Header.css";


const Header = () => {
  const [user, setUser] = useState(true);

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h3 className="logo">Recipy</h3>
        </Link>
        <nav className="navigation">
          <ul className="navigation-list">
            {!user ? (
              <li className="navigation-item">
                <Link to="/login" className="navigation-link">
                  <BiLogIn /> Login
                </Link>
              </li>
            ) : (
              <>
                <li className="navigation-item">
                  <Link to="/profile" className="navigation-link">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt="user"
                      className="user-image"
                    />
                    Username
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link to="/fridge" className="navigation-link">
                    <RiFridgeFill /> Fridge
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

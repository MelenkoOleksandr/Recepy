import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { RiFridgeFill } from "react-icons/ri";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/auth";


const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  
  const handleLogout = () => {
    dispatch(logout())
  }

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
                      src={user.img || "https://i.imgur.com/0Hwz9uB.png"}
                      alt="user"
                      className="user-image"
                    />
                    {user.username}
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link to="/fridge" className="navigation-link">
                    <RiFridgeFill /> Fridge
                  </Link>
                </li>
                <li className="navigation-item">
                  <button onClick={handleLogout} className="logout-btn">Logout</button>
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

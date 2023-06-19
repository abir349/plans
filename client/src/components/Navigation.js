import React, { useState } from "react";
import logo1 from "./image/logo1";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../js/slice/UserSlice";
import "./navigation.css"; 

const Navigation = () => {
  const user = useSelector((state) => state?.user?.user);

  const isAuth = localStorage.getItem("token");
  const path = window.location.pathname;
  console.log(path);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return path.includes("ashboard") ? null : (
    <div className="navb">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo1} alt="logo" style={{ width: "70px" }} />
        <h1
          style={{ fontSize: "20px", marginBottom: "0px", paddingLeft: "10px" }}
        >
          Best plans
        </h1>
      </div>
      <ul
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          alignItems: "center",
          height: "54px",
        }}
      >
        <Link to="/">
          <li className={color ? "li li1" : "li"}>Home</li>
        </Link>
        <Link to="/destination">
          <li className={color ? "li li1" : "li"}>Destination</li>
        </Link>
        <Link to="/experience">
          <li className={color ? "li li1" : "li"}>Experience</li>
        </Link>
        <Link to="/contact">
          <li className={color ? "li li1" : "li"}>Contact</li>
        </Link>{" "}
        {user ? (
          <Link to="/dashboard">
            <li className={color ? "li li1" : "li"}>Dashbord</li>
          </Link>
        ) : null}
        {!user ? (
          <Link to="/login">
            <li className={color ? "li li1" : "li"}>Login</li>
          </Link>
        ) : null}
      </ul>
      <ul
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          alignItems: "center",
          height: "54px",
        }}
      >
        {user ? (
          <>
            <Link to="/profil">
              <li className={color ? "li li1" : "li"}>Profile</li>
            </Link>
            <Link to="/favoris">
              <li className={color ? "li li1" : "li"}>Favoris</li>
            </Link>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default Navigation;

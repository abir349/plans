import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getuser, logout, userCurrent } from "./js/slice/UserSlice";
import PrivateRoute from "./privateroute/PrivateRoute";
import Profil from "./components/Profil";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Destination from "./components/Destination";
import { getdestination } from "./js/slice/destinationSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import Favoris from "./components/Favoris";
import { getfavoris } from "./js/slice/favorisSlice";
import Dashboard from "./components/Dashboard";
import UserTab from "./components/UserTab";
import DestinationTab from "./components/DestinationTab";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(true);
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getdestination());
    dispatch(getfavoris());
    dispatch(getuser());
  }, [ping]);

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />

        <Route path="/experience" element={<Experience />} />
        <Route element={<PrivateRoute />}></Route>
        <Route path="/favoris" element={<Favoris />} />
        <Route
          path="dashboard"
          element={<Dashboard ping={ping} setping={setping} />}
        >
          <Route
            path="userlist"
            element={<UserTab ping={ping} setping={setping} />}
          />
          <Route
            path="deslist"
            element={<DestinationTab ping={ping} setping={setping} />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

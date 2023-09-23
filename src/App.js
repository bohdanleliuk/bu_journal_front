import "./App.scss";
import SideBar from "./modules/SideBar/SideBar";
import { Outlet, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import Subjects from "./pages/subjects/Subjects";
import { useEffect, useRef } from "react";

const App = () => {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/') {
      navigate('/subjects');
    }
  }, [])

  return (
    <div className="app">
      <SideBar/>
      <div className="side-left" />
      <div className="container">
        <Outlet/>
      </div>
      <div className="side-right" />
    </div>
  );
};

export default App;

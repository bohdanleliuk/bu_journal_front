import "./App.scss";
import SideBar from "./modules/SideBar/SideBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllSubjects } from './redux/thunks'

const App = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname == '/') {
      navigate('/subjects');
    }
    dispatch(getAllSubjects());
  }, []);

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

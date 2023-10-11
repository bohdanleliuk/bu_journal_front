import "./App.scss";
import SideBar from "./modules/SideBar/SideBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from './redux/thunks'

const App = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    console.log('USER FOR LS: ', user);
    if (user?.username) {
      navigate('/subjects');
      dispatch(getAllSubjects());
    } else {
      navigate('/login');
    }
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

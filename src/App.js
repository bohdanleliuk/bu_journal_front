import "./App.scss";
import SideBar from "./modules/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const App = () => {

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

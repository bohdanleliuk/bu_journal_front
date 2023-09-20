import { useState } from "react";
import "./App.scss";
import SideBar from "./modules/SideBar/SideBar";
import Subjects from "./pages/subjects/Subjects";

const App = () => {

  const [editAccess, setEditAccess] = useState(true);

  return (
    <div className="app">
      <SideBar/>
      <div className="side-left" />
      <div className="container">
        <Subjects/>
      </div>
      <div className="side-right" />
    </div>
  );
};

export default App;

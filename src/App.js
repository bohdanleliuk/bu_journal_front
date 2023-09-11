import { useState } from "react";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import { Title } from "./components/Title/Title";

const App = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    function handleClick() {
      setIsOpen(prev => !prev);
    }

    return (
    <div className="app">
        <SideBar/>
        <div className="side-left"/>
        <div className="container-flex">
          <div className="block">1</div>
          <div className={ isOpen ? 'block' : 'block big-block'} onClick={handleClick}>2</div>
          <div className="block">3</div>
          <div className="block">4</div>
          <div className="block">5</div>
          <div className="block">6</div>
          <div className="block">7</div>
          <div className="block">8</div>
          <div className="block">1</div>
          <div className="block">2</div>
          <div className="block">3</div>
          <div className="block">4</div>
          <div className="block">5</div>
          <div className="block">6</div>
          <div className="block">7</div>
          <div className="block">8</div>
          <div className="block">1</div>
          <div className="block">2</div>
          <div className="block">3</div>
          <div className="block">4</div>
          <div className="block">5</div>
          <div className="block">6</div>
          <div className="block">7</div>
          <div className="block">8</div>
        </div>
        <div className="side-right"/>
    </div>
  );
};

export default App;

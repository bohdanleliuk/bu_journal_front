import { useState } from "react";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import { Title } from "./components/Title/Title";
import SubjectCard from "./components/Cards/SubjectCard/SubjectCard";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editAccess, setEditAccess] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="app">
      <SideBar />
      <div className="side-left" />
      <div className="content-container">
        <div className="column">
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова та стародавня література" type="лекція" editAccess={editAccess}/>
        </div>
        <div className="column">
          <SubjectCard subject="Українська мова та стародавня література" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова та стародавня література" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова та стародавня література" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова та стародавня література" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова та стародавня література" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова та стародавня література" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова та стародавня література" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова та стародавня література" type="лекція" editAccess={editAccess}/>
          <SubjectCard subject="Українська мова та стародавня література" type="лекція" editAccess={editAccess}/>
        </div>
      </div>
      <div className="side-right" />
    </div>
  );
};

export default App;

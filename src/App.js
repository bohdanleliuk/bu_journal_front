import { useEffect, useState } from "react";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import { Title } from "./components/Title/Title";
import SubjectCard from "./components/Cards/SubjectCard/SubjectCard";
import response from './testdata/subjects';
import LessonCard from "./components/Cards/LessonCard/LessonCard";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editAccess, setEditAccess] = useState(true);
  const [subjects, setSubjects] = useState([]);
  const [filters, setFilters] = useState({
    group: [],
    kefedra: [],
    faculty: [],
  });

  useEffect(() => {
    response.then((res) => {
      setSubjects(res);
      setFilters(createFilters(filters, res));
    });
  },[]);

  function createFilters(filters, arr) {
    let filt = JSON.parse(JSON.stringify(filters))
    for (let i = 0; i < arr.length; i++) {
      let subject = arr[i];
      for (const [prop, value] of Object.entries(subject)) {
        if (filt[prop] && !filt[prop].includes(value)) {
          filt[prop].push(value);
        }
      }
    }
    return filt;
  }

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="app">
      <SideBar />
      <div className="side-left" />
      <div className="container">
      <Title>Предмети</Title>
      <div className="content-container">
        <div className="column">
          {subjects.map((sub) => (<SubjectCard subject={sub.name} editAccess={editAccess}/>))}
          {subjects.map((sub) => (<SubjectCard subject={sub.name} editAccess={editAccess}/>))}
          {subjects.map((sub) => (<SubjectCard subject={sub.name} editAccess={editAccess}/>))}
        </div>
        <div className="column">
          <LessonCard lesson="Основи механіки доти" type="лекція" dateStart="19.09" timeStart="11:30" editAccess={editAccess}/>
          <LessonCard lesson="Основи механіки доти" type="лекція" dateStart="19.09" timeStart="11:30" editAccess={editAccess}/>
          <LessonCard lesson="Основи механіки доти" type="лекція" dateStart="19.09" timeStart="11:30" editAccess={editAccess}/>
          <LessonCard lesson="Основи механіки доти" type="лекція" dateStart="19.09" timeStart="11:30" editAccess={editAccess}/>
          <LessonCard lesson="Основи механіки доти" type="лекція" dateStart="19.09" timeStart="11:30" editAccess={editAccess}/>
          <LessonCard lesson="Основи механіки доти" type="лекція" dateStart="19.09" timeStart="11:30" editAccess={editAccess}/>
          <LessonCard lesson="Основи механіки доти" type="лекція" dateStart="19.09" timeStart="11:30" editAccess={editAccess}/>
          <LessonCard lesson="Основи механіки доти" type="лекція" dateStart="19.09" timeStart="11:30" editAccess={editAccess}/>
          <LessonCard lesson="Основи механіки доти" type="лекція" dateStart="19.09" timeStart="11:30" editAccess={editAccess}/>
        </div>
      </div>
      </div>
      <div className="side-right" />
    </div>
  );
};

export default App;

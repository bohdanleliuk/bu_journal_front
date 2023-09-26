import styles from './Subjects.module.scss';
import { SubjectCard } from '../../components';
import { useSelector } from "react-redux";


const Subjects = () => {

  let subjects = useSelector((store) => store.subjects);

  return (
        <div className={styles.contentContainer}>
          
          <div className={styles.column}>
            {subjects?.map((subject) => <SubjectCard key={subject.id} subject={subject}/>)}
          </div>
          <div className={styles.column}>
            {subjects?.map((subject) => <SubjectCard key={subject.id} subject={subject}/>)}
          </div>
        </div>
);
};

const createTwoColumnArray = (arr) => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    i % 2 == 0 ? arr1.push(arr[i]) : arr2.push(arr[i]);
  }
  return [arr1, arr2];
}

export default Subjects
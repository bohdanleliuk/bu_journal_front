
import { getAllSubjectsAsync } from '../../../api'
import { addAllSubjects } from '../../actions';

function getAllSubjects() {

    return async function getAllSubjectsThunk(dispatch, getState) {
        const subject = await getAllSubjectsAsync();
        const subjects = createArrayOfSubjects(subject, 41);
        dispatch(addAllSubjects(subjects));
    }
}

export default getAllSubjects;

const createArrayOfSubjects = (subject, count) => {
    let arr =[];
    for (let i = 0; i < count; i++) {
      let newSubject = JSON.parse(JSON.stringify(subject));
      newSubject.id = 'Very Important Subject ' + Number.parseInt(Math.random()*1000000);
      arr.push(newSubject);
    }
    return arr;
  }
const addAllSubjects = (subjects) => {
    return {
        type: 'add subjects',
        payload: subjects,
    }
}

export default addAllSubjects;
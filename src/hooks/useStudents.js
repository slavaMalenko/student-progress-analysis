import {useEffect, useState} from 'react';
import { getStudentsAction } from '../actions/actions';
import StudentStorage from '../stateManagement/StudentStorage';
import useAction from './useAction';

const deserializeStudents = students => {
    return students.map(student => new StudentStorage(student));
}

export default function useStudents() {
    const [students, setStudents] = useState();
    const getStudents = useAction(getStudentsAction);

    useEffect(() => {
        getStudents()
            .then(deserializeStudents)
            .then(setStudents);
    }, [getStudents, setStudents]);
    return students;
}

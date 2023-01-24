import {useEffect, useState} from 'react';
import { getStudentAction } from '../actions/actions';
import useAction from './useAction';

export default function useStudent(id) {
    const [student, setStudent] = useState();
    const getStudent = useAction(getStudentAction);

    useEffect(() => {
        id && getStudent(id)
            .then(setStudent);
    }, [id, getStudent, setStudent]);
    return student;
}

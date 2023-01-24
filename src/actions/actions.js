import axios from "axios";

export const getStudentsAction = "get.students";
export const getStudentAction = "get.student";

export const actions = {
    [getStudentsAction]: async () => {
        const action = axios.get('http://localhost:4000/students')
        const response = await action;
        return response.data;
    },
    [getStudentAction]: async id => {
        const action = axios.get(`http://localhost:4000/students/${id}`)
        const response = await action;
        return response.data;
    }
}
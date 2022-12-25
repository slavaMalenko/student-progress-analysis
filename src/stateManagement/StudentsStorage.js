import { action, makeAutoObservable, observable } from "mobx";

class StudentsStorage {
    students = [];

    constructor() {
        makeAutoObservable(this, {
            students: observable,
            setStudents: action
        })
    }

    get studentsList() {
        return this.students;
    }

    setStudents = (students = []) => {
        this.students = students;
    }
}

export default StudentsStorage;
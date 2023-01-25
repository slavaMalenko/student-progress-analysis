import { action, observable, makeObservable } from "mobx";

class JournalFilterStorage {
    _course;
    _group;

    constructor() {
        this._course = null;
        this._group = "";

        makeObservable(this, {
            _course: observable,
            _group: observable,
            setCourse: action,
            setGroup: action
        })
    }

    get course() {
        return this._course;
    }
    get group() {
        return this._group;
    }

    setCourse = course => this._course = course;
    setGroup = group => this._group = group;
}

export default JournalFilterStorage;
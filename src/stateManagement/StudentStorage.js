import { action, observable, makeObservable } from "mobx";

class StudentStorage {
    _id;
    _firstName;
    _lastName;
    _patronymic;
    _group;
    _course;
    _estimates;

    constructor({id = null, firstName = null, lastName = null, patronymic = null, group = null, course = null, estimates = []}) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._patronymic = patronymic;
        this._course = course;
        this._group = group;
        this._estimates = estimates;

        makeObservable(this, {
            _id: observable,
            _firstName: observable,
            _lastName: observable,
            _patronymic: observable,
            _course: observable,
            _group: observable,
            _estimates: observable,
            setData: action
        })
    }

    get id() {
        return this._id;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get patronymic() {
        return this._patronymic;
    }
    get group() {
        return this._group;
    }
    get course() {
        return this._course;
    }
    get estimates() {
        return this._estimates;
    }

    setData({id = null, firstName = null, lastName = null, patronymic = null, group = null, course = null, estimates = []}) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._patronymic = patronymic;
        this._course = course;
        this._group = group;
        this._estimates = estimates;
    }
}

export default StudentStorage;
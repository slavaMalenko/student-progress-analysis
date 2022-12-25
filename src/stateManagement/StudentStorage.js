import { action, makeAutoObservable, observable } from "mobx";

class StudentStorage {
    _firstName;
    _lastName;
    _patronymic;
    _estimates;

    constructor({firstName, lastName, patronymic, estimates}) {
        makeAutoObservable(this, {
            _firstName: observable,
            _lastName: observable,
            _patronymic: observable,
            _estimates: observable,
        })
        this._firstName = firstName;
        this._lastName = lastName;
        this._patronymic = patronymic;
        this._estimates = estimates;
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
    get estimates() {
        return this._estimates;
    }
}

export default StudentStorage;
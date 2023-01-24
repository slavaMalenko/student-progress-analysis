import { action, makeObservable, observable } from "mobx";

class StudentStorage {
    _id;
    _firstName;
    _lastName;
    _patronymic;
    _estimates;

    constructor({id = '', firstName = '', lastName = '', patronymic = '', estimates = []}) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._patronymic = patronymic;
        this._estimates = estimates;

        makeObservable(this, {
            _id: observable,
            _firstName: observable,
            _lastName: observable,
            _patronymic: observable,
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
    get estimates() {
        return this._estimates;
    }

    setData({id = null, firstName = null, lastName = null, patronymic = null, estimates = []}) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._patronymic = patronymic;
        this._estimates = estimates;
    }
}

export default StudentStorage;
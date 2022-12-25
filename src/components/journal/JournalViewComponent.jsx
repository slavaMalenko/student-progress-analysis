import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import { useStore } from '../../hooks/useStore';
import DefaultTable from '../ui/DefaultTable';

const columns = [
    {key: "lastName", label: "Фамилия"},
    {key: "firstName", label: "Имя"},
    {key: "patronymic", label: "Отчество"},
    {key: "projectManagement", label: "Проектный менеджмент"},
    {key: "mathModels", label: "Математические модели представления знаний"},
    {key: "researchMethodology", label: "Методология научных исследований"},
    {key: "psychologyProfessionalActivity", label: "Психология профессиональной деятельности"},
    {key: "modelingLanguages", label: "Языки моделирования"},
]

function JournalViewComponent() {
    const {studentsList} = useStore();
    const getData = useCallback((studentsList = []) => {
        return studentsList.map(({firstName, lastName, patronymic, estimates}) => {
            const estimatesObj = {};
            estimates.forEach(({name, value}) => {
                estimatesObj[name] = value;
            });
            return {firstName, lastName, patronymic, ...estimatesObj}
        })
    }, [studentsList])
    return <DefaultTable data={getData(studentsList)} columns={columns} />
}

export default observer(JournalViewComponent);
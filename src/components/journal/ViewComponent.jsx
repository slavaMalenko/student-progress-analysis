import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import { useStore } from '../../hooks/useStore';
import DefaultTable from '../ui/DefaultTable';
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const getData = useCallback((studentsList = []) => {
        return studentsList.map(({id, firstName, lastName, patronymic, estimates}) => {
            const estimatesObj = {};
            const onClickRow = () => navigate(`/students/${id}`);
            estimates.forEach(({name, value}) => {
                estimatesObj[name] = value;
            });
            return {
                data: {
                    firstName,
                    lastName,
                    patronymic,
                    ...estimatesObj
                },
                onClickRow
            }
        })
    }, [studentsList])
    return <DefaultTable dataSource={getData(studentsList)} columns={columns} />
}

export default observer(JournalViewComponent);
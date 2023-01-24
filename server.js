const express = require('express');
const Router = require('express');

let students = [
    {
        id: 1,
        firstName: "Богуслав",
        lastName: "Маленко",
        patronymic: "Юрьевич",
        estimates: [
            {
                name: "projectManagement",
                value: 5
            }, {
                name: "mathModels",
                value: 5
            }, {
                name: "researchMethodology",
                value: 5
            }, {
                name: "psychologyProfessionalActivity",
                value: 5
            }, {
                name: "modelingLanguages",
                value: 5
            },
        ]
    },
    {
        id: 2,
        firstName: "Виктор",
        lastName: "Соляник",
        patronymic: "Юрьевич",
        estimates: [
            {
                name: "projectManagement",
                value: 5
            }, {
                name: "mathModels",
                value: 5
            }, {
                name: "researchMethodology",
                value: 5
            }, {
                name: "psychologyProfessionalActivity",
                value: 5
            }, {
                name: "modelingLanguages",
                value: 5
            },
        ]
    },
    { 
        id: 3,
        firstName: "Андрей",
        lastName: "Рядовой",
        patronymic: "Юрьевич",
        estimates: [
            {
                name: "projectManagement",
                value: 5
            }, {
                name: "mathModels",
                value: 5
            }, {
                name: "researchMethodology",
                value: 5
            }, {
                name: "psychologyProfessionalActivity",
                value: 5
            }, {
                name: "modelingLanguages",
                value: 5
            },
        ]
    },
]

const PORT = process.env.PORT ?? 4000;
const app = express();
const router = Router();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

router.get('/students', (req, res) => {
    res.json(students)
})

router.get('/students/:id', ({params}, res) => {
    res.json(students.find(student => student.id == params.id))
})

app.listen(PORT, () => {
    console.log(`Сервер запущен... Порт: ${PORT}`)
});
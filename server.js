const express = require('express');
const Router = require('express');
const { studentsList } = require('./students');

let students = studentsList;

const PORT = process.env.PORT ?? 4000;
const app = express();
const router = Router();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

router.get('/students', ({query}, res) => {
    console.log(query)
    if (query.course && query.group) {
        const studentsFilter = students.filter(({course, group}) => course === query.course && group === query.group)
        res.json(studentsFilter)
    } else {
        res.json(students)
    }
})

router.get('/students/:id', ({params}, res) => {
    res.json(students.find(student => student.id == params.id))
})

app.listen(PORT, () => {
    console.log(`Сервер запущен... Порт: ${PORT}`)
});
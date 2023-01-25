import { observer } from 'mobx-react';
import React, { Fragment, useCallback, useState } from 'react';
import { useStore } from '../../hooks/useStore';
import DefaultTable from '../ui/DefaultTable';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import OutlinedInput from '@mui/material/OutlinedInput';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import DialogActions from '@mui/material/DialogActions';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { journalFilterStorage } from '../../stateManagement';
import { stringAvatar } from '../ui/Avatar';

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

const Buttons = styled("div")(() => ({
    "display": "flex",
    padding: "0 0 10px 0",
    "justifyContent": "space-between",
    alignItems: "center"
}));
const ButtonsDialog = styled(DialogActions)(() => ({
    "display": "flex",
    justifyContent: "space-between"
}));

const StyledTitleFilter = styled("div")(() => ({
    "fontSize": "20px",
    display: "inline-block",
    marginRight: "10px",
    fontWeight: "100"
}));
const FilterData = styled("div")(() => ({
    "fontSize": "13px",
    display: "inline-block",
    marginLeft: "10px",
}));

const FilterBlock = styled(Card)(() => ({
    "padding": "10px 20px 10px 30px",
    alignItems: "center",
    display: "flex"
}));

const StyledButton = styled(Button)(() => ({
    margin: "0 10px"
}));

function JournalViewComponent() {
    const {studentsList} = useStore();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const {course, group, setCourse, setGroup} = journalFilterStorage;

    const handleChangeCourse = (event) => {
        setCourse(event.target.value);
    };
    const handleChangeGroup = (event) => {
        setGroup(event.target.value);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
          setOpen(false);
        }
    };
    
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
    }, [navigate])
    return <Fragment>
        <Buttons>
            <AvatarGroup total={studentsList.length} max={10}>
                {studentsList.map(({firstName, lastName, id}) => <Avatar onClick={() => navigate(`/students/${id}`)} {...stringAvatar(`${firstName} ${lastName}`, 45, 45)} />)}
            </AvatarGroup>

            <FilterBlock>
                <StyledTitleFilter>Фильтрация: 
                    <FilterData>{`${course ? ` ${course} курс,` : ''} ${group}`}</FilterData>
                </StyledTitleFilter>

                <StyledButton
                    variant="contained"
                    color="success"
                    onClick={() => setOpen(true)}
                >
                    Выбрать
                </StyledButton>
                
                <StyledButton
                    variant="contained"
                    color="success"
                    disabled={!course && !group}
                    onClick={() => {
                        setCourse(null);
                        setGroup('');
                    }}
                >
                    Показать всех
                </StyledButton>
            </FilterBlock>
        </Buttons>

        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Фильтрация</DialogTitle>
            <DialogContent>
                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="dialog-select-label">Курс</InputLabel>
                        <Select
                            labelId="dialog-select-label"
                            id="dialog-select"
                            value={course}
                            onChange={handleChangeCourse}
                            input={<OutlinedInput label="Курс"/>}
                        >
                            <MenuItem value="">Не выбрано</MenuItem>
                            <MenuItem value={1}>1 курс</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="dialog-select-label">Группа</InputLabel>
                        <Select
                            labelId="dialog-select-label"
                            id="dialog-select"
                            value={group}
                            onChange={handleChangeGroup}
                            disabled={!course}
                            input={<OutlinedInput label="Группа"/>}
                        >
                            <MenuItem value="">Не выбрано</MenuItem>
                            <MenuItem value={"ПМО-м-о-221"}>ПМО-м-о-221</MenuItem>
                            <MenuItem value={"БИ-б-о-181"}>БИ-б-о-181</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>
            <ButtonsDialog>
                <Button
                    onClick={() => {
                        setCourse(null);
                        setGroup('');
                        handleClose();
                    }}
                    variant="outlined"
                    color="error"
                >
                    Отменить
                </Button>

                <Button onClick={handleClose} variant="contained" color="success">Продолжить</Button>
            </ButtonsDialog>
        </Dialog>
    
        <DefaultTable dataSource={getData(studentsList)} columns={columns} />
    </Fragment>
}

export default observer(JournalViewComponent);
import React, {useState} from 'react';
import { observer } from 'mobx-react';
import { useNavigate } from "react-router-dom";
import { useStore } from '../../hooks/useStore';

import { SmallStyledContainer } from '../ui/Containers';
import { stringAvatar } from '../ui/Avatar';

import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AcademicPerformance from './AcademicPerformance';

const StudentInfoBlock = styled(Card)(() => ({
    "padding": "20px 50px",
    "overflow": "visible"
}));

const Header = styled("div")(() => ({
    "display": "flex",
    "align-items": "center"
}));

const StyledTitle = styled("div")(() => ({
    "display": "flex",
    "flexDirection": "column",
    "padding": "5px 20px",
    "font-weight": "bold",
    "font-size": "20px",
    "width": "800px"
}));
const StyledTitleGroup = styled("div")(() => ({
    "fontSize": "12px",
    paddingBottom: "5px",
    "fontWeight": "100",
}));

const Buttons = styled("div")(() => ({
    "display": "flex",
    justifyContent: "space-between",
    paddingBottom: "10px"
}));

function ViewComponent() {
    const [readOnly, setReadOnly] = useState(true);
    const {firstName, lastName, group, course} = useStore();
    const navigate = useNavigate();
    return <SmallStyledContainer>
        <StudentInfoBlock>
            <Header>
                <Avatar {...stringAvatar(`${firstName} ${lastName}`, 56, 56)}/>
                <StyledTitle>
                    {`${firstName} ${lastName}`}
                    <StyledTitleGroup>{`${course} курс, ${group}`}</StyledTitleGroup>
                    <Divider light />
                </StyledTitle>
            </Header>

            <AcademicPerformance readOnly={readOnly} />

            <Buttons>
                {readOnly && <Button
                    variant="outlined"
                    color="error"
                    onClick={() => navigate("/students")}
                >
                    Вернуться
                </Button>}

                {readOnly && <Button
                    variant="outlined"
                    color="success"
                    onClick={() => setReadOnly(false)}
                >
                    Редактировать
                </Button>}

                {!readOnly && <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setReadOnly(true)}
                >
                    Отменить
                </Button>}

                {!readOnly && <Button
                    variant="contained"
                    color="success"
                    onClick={() => setReadOnly(true)}
                >
                    Сохранить
                </Button>}
            </Buttons>
        </StudentInfoBlock>
    </SmallStyledContainer>
}

export default observer(ViewComponent);
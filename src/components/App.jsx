import React, { useState, Fragment } from 'react';
import { BottomNavigation, BottomNavigationAction, CssBaseline, Container } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { styled } from '@mui/material/styles';
import JournalInitComponent from './journal/InitComponent';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import ViewlInitComponent from './view/InitComponent';
import { observer } from 'mobx-react';

const StyledContainer = styled(Container)(() => ({width: "1700px"}));
const StyledBottomNavigation = styled(BottomNavigation)(() => ({
    position: 'fixed',
    width: '100%',
    bottom: 0,
}));

function App() {
    const [menuSelected, setMenuSeleted] = useState("journal");
    const navigate = useNavigate();

    return (
        <Fragment>
            <CssBaseline />
            <StyledContainer>
                <Routes>
                    {menuSelected === "journal" && (
                        <Fragment>
                            <Route exact path="/students" element={<JournalInitComponent />} />
                            <Route path="/students/:id?" element={<ViewlInitComponent />} />
                        </Fragment>
                    )}
                </Routes>
            </StyledContainer>
            <StyledBottomNavigation
                showLabels
                value={menuSelected}
                onChange={(event, newValue) => {
                    setMenuSeleted(newValue);
                }}
            >
                <BottomNavigationAction onClick={() => navigate("/students")} label="Журнал" value="journal" icon={<RestoreIcon />} />
                <BottomNavigationAction onClick={() => navigate("/performance")} label="Успеваемость" value="performance" icon={<CastForEducationIcon />} />
            </StyledBottomNavigation>
        </Fragment>
    )
}

export default observer(App);
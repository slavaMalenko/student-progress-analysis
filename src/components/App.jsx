import React, { useState, Fragment } from 'react';
import { observer } from 'mobx-react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { BottomNavigation, BottomNavigationAction, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import RestoreIcon from '@mui/icons-material/Restore';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

import JournalInitComponent from './journal/InitComponent';
import ViewlInitComponent from './view/InitComponent';

import { BigStyledContainer } from './ui/Containers';

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
            <BigStyledContainer>
                <Routes>
                    {menuSelected === "journal" && (
                        <Fragment>
                            <Route exact path="/students" element={<JournalInitComponent />} />
                            <Route path="/students/:id?" element={<ViewlInitComponent />} />
                        </Fragment>
                    )}
                </Routes>
            </BigStyledContainer>
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
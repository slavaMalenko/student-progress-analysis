import React, { useState, Fragment } from 'react';
import { BottomNavigation, BottomNavigationAction, CssBaseline, Container } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { styled } from '@mui/material/styles';
import JournalInitComponent from './journal/JournalInitComponent';

const StyledContainer = styled(Container)(() => ({width: "1700px"}));
const StyledBottomNavigation = styled(BottomNavigation)(() => ({
    position: 'fixed',
    width: '100%',
    bottom: 0,
}));

export default function App() {
    const [menuSelected, setMenuSeleted] = useState("journal");

    return (
        <Fragment>
            <CssBaseline />
            <StyledContainer>
                {menuSelected === "journal" && <JournalInitComponent />}
            </StyledContainer>
            <StyledBottomNavigation
                showLabels
                value={menuSelected}
                onChange={(event, newValue) => {
                    setMenuSeleted(newValue);
                }}
            >
                <BottomNavigationAction label="Журнал" value="journal" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Успеваемость" value="performance" icon={<CastForEducationIcon />} />
            </StyledBottomNavigation>
        </Fragment>
    )
}
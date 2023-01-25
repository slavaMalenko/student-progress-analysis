import React from 'react';
import { observer } from 'mobx-react';
import { styled } from '@mui/material/styles';
import { useStore } from '../../hooks/useStore';
import Subject from './Subject';

const Body = styled("div")(() => ({
    "padding": "40px 0"
}));
function AcademicPerformance({readOnly}) {
    const {estimates} = useStore();
    return <Body>{estimates.map(estimate => <Subject storage={estimate} readOnly={readOnly} />)}</Body>
}

export default observer(AcademicPerformance);
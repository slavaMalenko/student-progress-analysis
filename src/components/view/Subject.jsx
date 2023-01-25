import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { estimatesLabels } from './constants';
import MuiAlert from '@mui/material/Alert';

const Body = styled("div")(() => ({
    "width": "100%",
    "padding": "10px 10px",
    "display": "flex",
    "justifyContent": "space-between",
    "position": "relative"
}));

const StyledTitle = styled("div")(() => ({
    "display": "inline-block",
    "padding": "0 20px",
    "fontWeight": "100",
    "fontSize": "15px"
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledAlert = styled(Alert)(() => ({
    "position": "absolute",
    "bottom": "12px",
    "left": "-210px"
}));

function Subject({storage, readOnly}) {
    const estimateInfo = estimatesLabels.find(({key}) => key === storage.name);
    const title = estimateInfo ? estimateInfo.label : '';
    
    return estimateInfo && <Body>
        <StyledTitle>{title}</StyledTitle>
        
        <Box sx={{ width: 300 }}>
            <Slider
                key={`slider-${storage.name}`}
                aria-label="grade"
                valueLabelDisplay={'auto'}
                value={storage.value}
                step={1}
                marks
                min={0}
                max={5}
                disabled={readOnly}
            />
        </Box>
        {storage.value <= 2 && <StyledAlert severity="error" sx={{ width: '225px' }}>{`Низкая успеваемость!`}</StyledAlert>}
    </Body>
}

export default observer(Subject);
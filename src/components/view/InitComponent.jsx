import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { StorageProvider } from '../../hooks/useStore';
import { studentStorage } from '../../stateManagement';
import useStudent from '../../hooks/useStudent';
import ViewComponent from './ViewComponent';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ViewlInitComponent() {
    const {id} = useParams();
    const student = useStudent(id);
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        student && studentStorage.setData(student);
    }, [student]);

    return (
        <StorageProvider store={studentStorage}>
            <ViewComponent />
            {student && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Данные студента загружены!
                </Alert>
            </Snackbar>}
        </StorageProvider>
    )
}

export default observer(ViewlInitComponent);
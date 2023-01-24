import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StorageProvider } from '../../hooks/useStore';
import useStudent from '../../hooks/useStudent';
import { studentStorage } from '../../stateManagement';
import ViewComponent from './ViewComponent';

function ViewlInitComponent() {
    const {id} = useParams();
    const student = useStudent(id);

    useEffect(() => {
        student && studentStorage.setData(student);
    }, [student]);

    return (
        <StorageProvider store={studentStorage}>
            <ViewComponent />
        </StorageProvider>
    )
}

export default observer(ViewlInitComponent);
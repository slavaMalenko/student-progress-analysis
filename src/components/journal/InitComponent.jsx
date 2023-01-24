import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { StorageProvider } from '../../hooks/useStore';
import useStudents from '../../hooks/useStudents';
import { studentsStorage } from '../../stateManagement';
import JournalViewComponent from './ViewComponent';

function JournalInitComponent() {
    const students = useStudents();

    useEffect(() => {
        studentsStorage.setStudents(students);
    }, [students]);

    return (
        <StorageProvider store={studentsStorage}>
            <JournalViewComponent />
        </StorageProvider>
    )
}

export default observer(JournalInitComponent);
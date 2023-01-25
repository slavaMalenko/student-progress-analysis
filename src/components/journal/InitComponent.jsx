import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { StorageProvider } from '../../hooks/useStore';
import useStudents from '../../hooks/useStudents';
import { journalFilterStorage, studentsStorage } from '../../stateManagement';
import JournalViewComponent from './ViewComponent';

function JournalInitComponent() {
    const {course, group} = journalFilterStorage;
    const students = useStudents({course, group});

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
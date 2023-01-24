import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks/useStore';

function ViewComponent() {
    const {lastName, patronymic} = useStore();
    return <React.Fragment>{`Что-то отобразилось...${lastName + patronymic}`}</React.Fragment>
}

export default observer(ViewComponent);
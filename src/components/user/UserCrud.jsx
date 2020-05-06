import React from 'react';
import Main from '../template/Main';
import api from '../../services/api';
import { useState } from 'react';

import UserForm from './UserForm';

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User Registration: Create, Remove, Update and Delete!'
}

const initialUser = {
    name: '',
    email: ''
}

const initialList = [];

function UserCrud(props) {
    const [user, setUser] = useState(initialUser);
    const [list, setList] = useState(initialList);

    function clear() {
        setUser(initialUser);
    }
    
    async function save() {
        const method = user.id ? 'put' : 'post';
        const endPoint = user.id ? `/${user.id}` : '';
        
        const resp = await api[method](endPoint, user);
        const auxList = getUpdatedList(resp.data);
        setUser(initialUser);
        setList(auxList);
    }

    function getUpdatedList(user) {
        const auxList = list.filter(u => u.id === user.id);
        auxList.unshift(user);
        return auxList;
    }

    function updateField(event) {
        const newUser = { ...user }
        newUser[event.target.name] = event.target.value;
        setUser({ ...newUser });
    }

    return (
        <Main {...headerProps}>
            <UserForm 
                name={user.name}
                email={user.email} 
                handleChange={updateField}
                onSubmit={save}
                onCancel={clear}
            />
        </Main>
    );
}

export default UserCrud;
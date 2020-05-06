import React from 'react';
import Main from '../template/Main';
import api from '../../services/api';
import { useState, useEffect } from 'react';

import UserForm from './UserForm';
import UserTable from './UserTable';

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

    useEffect(() => {
        async function loadUsers() {
            const resp = await api.get();
            setList(resp.data);
        }

        loadUsers();
    }, []);

    function load(userData) {
        setUser(userData);
    }

    async function remove(userData) {
        await api.delete(`/${userData.id}`);
        const auxList = getUpdatedList(userData, false);
        setList(auxList);
    }

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

    function getUpdatedList(userData, add = true) {
        const auxList = list.filter(u => u.id !== userData.id);
        if (add) auxList.unshift(userData);
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
            <UserTable
                list={list}
                onLoad={load}
                onRemove={remove}
            />
        </Main>
    );
}

export default UserCrud;
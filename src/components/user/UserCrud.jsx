import React from 'react';
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User Registration: Create, Remove, Update and Delete!'
}

function UserCrud(props) {
    return (
        <Main {...headerProps}>
            User Registration
        </Main>
    );
}

export default UserCrud;
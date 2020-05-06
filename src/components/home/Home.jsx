import React from 'react';
import Main from '../template/Main';

function Home(props) {
    return (
        <Main icon="home" title="Início" subtitle="User Registration with React">
            <div className="display-4">Welcome!</div>
            <hr />
            <p className="mb-0">System created to do CRUD operations</p>
        </Main>
    );
}

export default Home;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from './components/home/Home';
import UserCrud from './components/user/UserCrud';

function Routes(props) {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/users'>
                <UserCrud />
            </Route>
            <Redirect from='*' to='/' />
        </Switch>
    );
}


export default Routes;
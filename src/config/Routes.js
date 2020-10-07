import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import ProfileDetail from '../pages/ProfileDetail';
import Browse from '../pages/Browse'

const Routes = () => {
    return (
        <Switch>
            <Route exact path ='/' component={Landing}/>
            <Route path ='/home' component={ Home } />
            <Route path ='/profile/:id' component={ ProfileDetail } />
            <Route path ='/browse' component={ Browse } />
        </Switch>
)}



export default Routes;
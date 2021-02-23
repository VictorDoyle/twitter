import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Feed from '../pages/Feed'


export default (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/feed' component={ Feed } />
        {/* 404 ROUTE */}
        <Route component={NotFound} />
    </Switch>
)
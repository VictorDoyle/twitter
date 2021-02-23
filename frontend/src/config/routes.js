import React from 'react'
import { Switch, Route } from 'react-router-dom'


export default (
    <Switch>
        <Route exact path='/' component={Homepage} />
        {/* 404 ROUTE */}
        <Route component={NotFound} />
    </Switch>
)
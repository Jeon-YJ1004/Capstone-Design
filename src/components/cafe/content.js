import React from 'react'
import { Route, Switch } from "react-router-dom"
import MapContainer from './Map'
import Result from './result'

function Content(){
    return (
        <Switch>
            {/* <Route path='/' exact render={() => <MapContainer />} /> */}
            <Route path={'/search/:place'} render={() => <Result />} />
        </Switch>
    )
}

export default Content

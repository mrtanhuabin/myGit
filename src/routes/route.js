import React from 'react'
import {HashRouter,Route,Redirect,Switch} from "react-router-dom";
import  Home from '../views/home/Home.js'
import  Goods from '../views/login/login.js'
import  pageA from '../views/home/pageA.js'
import  demoa from '../views/demo/Demoa.js'
import  democ from '../views/demo/Demec.js'

class RouteMap extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/login" exact component={Goods}/>
                    <Route path="/pageA" exact component={pageA}/>
                    <Route path="/demoa" exact component={demoa}/>
                    <Route path="/democ" exact component={democ}/>
                    <Redirect to='/login' />
                </Switch>
            </HashRouter>
        )
    }
}

export default RouteMap
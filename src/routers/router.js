import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from '../App'
import List from '../components/List'
import Detail from '../components/Detail'
import EditTableCell from '../components/EditTableCell'

class Routers extends Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}></Route>
                <Route path='/list' component={List}></Route>
                <Route path='/detail' component={Detail}></Route>
                <Route path='/editTableCell' component={EditTableCell}></Route>
            </Router>
        )
    }
}

export default Routers;

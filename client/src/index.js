import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import App, {PromptClass} from './App';
import Login from './Login';
import Student from './Student';
import Draw from './Draw';
import ClassAdmin from './ClassAdmin';
import 'spectre.css/dist/spectre.min.css';
import './index.css';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={PromptClass} />
            <Route path="/login" component={Login} />
            <Route path="/class/:classId" component={Student} />
            <Route path="/draw/:classId" component={Draw} />
            <Route path="/admin/class/:classId" component={ClassAdmin} />
        </Route>
    </Router>
), document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import App, {PromptClass} from './App';
import Student from './Student';
import Draw from './Draw';
import './index.css';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={PromptClass} />
            <Route path="/class/:classId" component={Student} />
	    <Route path="/draw/:classId" component={Draw} />
        </Route>
    </Router>
), document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import './index.css';
import aboutPage from './aboutPage';
import Work from './Work';


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/aboutPage' component={aboutPage}/>
            <Route path='/Work' component={Work}/>
        </Switch>
    </Router>, 
    document.getElementById('root')
);
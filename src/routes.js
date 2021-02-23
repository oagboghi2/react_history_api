import React from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { HomePage, About, Contact, Foo} from './paths.js';


const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;
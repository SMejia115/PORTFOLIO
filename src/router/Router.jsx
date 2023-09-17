import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from '../views/home';
import AboutPage from '../views/about';
import ProjectsPage from '../views/projects';
import ContactPage from '../views/contact';

const AppRouter = () => {
    return (
        <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/contact" component={ContactPage} />
        </Switch>
        </Router>
    );
    }
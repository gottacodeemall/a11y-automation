import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';

import LandingPage from './components/landingPage/LandingPage';
import SidePage from './components/SidePage/SidePage';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/side" component={SidePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

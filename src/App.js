import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './views/Home';
import Bio from './views/Bio';
import ContactUs from './views/ContactUs';
import Description from './views/Description';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar/>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bio" component={Bio} />
                    <Route exact path="/description" component={Description} />
                    <Route exact path="/contact-us" component={ContactUs} />
                </div>
            </Router>
        );
    }
}

export default App;

import React, {Component, useState} from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import NoMatch from "./noMatch";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
                <Link to="/">Home</Link><br/>
                <Link to="/about">About</Link>
                <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}


export default App;

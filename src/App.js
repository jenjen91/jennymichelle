import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './Menu.js';
import Home from './Home.js';
import Contact from './Contact.js';
import NotFound from './NotFound.js';
import './App.css';
import './reusable.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />

          <div className="container">
            <header className="App-header">
              <h1 className="App-title">Jenny Michelle</h1>
            </header>

            <main className="content">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Route component={NotFound}/>
              </Switch>
            </main>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;

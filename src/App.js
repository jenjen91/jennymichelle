import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Menu from './Menu.js';
import SideBar from './SideBar.js';
import Programming from './pages/Programming.js';
import Design from './pages/Design.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';
import './App.css';
import './reusable.css';

const drawerWidth = 250; //check with in sidebar too

const styles = theme => ({
  content: {
    padding: 12,
    flexGrow: 1,
    textAlign: 'center',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: true}
  }
  handleDrawer = (state) => {
    this.setState({open: state});
  }
  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <Router>
        <div className="App">
          <Menu handleDrawer={this.handleDrawer} open={this.state.open}/>

          <div className="container">
            <SideBar handleDrawer={this.handleDrawer} open={this.state.open}/>

            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/programming" component={Programming}/>
                <Route exact path="/design" component={Design}/>
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

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);

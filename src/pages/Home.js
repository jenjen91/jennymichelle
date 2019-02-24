import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  }
}
class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <header className="App-header">
          <h1 className="App-title">Jenny Michelle</h1>
        </header>
        <nav className="links">
          <i className="material-icons">
            link
          </i>
          <a href="https://www.linkedin.com/in/jennymichelle" alt="LinkedIn">LinkedIn</a>
        </nav>
        <script
          type="IN/MemberProfile"
          data-id="http://www.linkedin.com/in/jennymichelle"
          data-format="inline"
          data-related="false">
        </script>
      </div>
    );
  }
}


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

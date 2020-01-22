import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link } from "react-router-dom";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1000,
    position: 'fixed',
    display: 'flex',
    width: '100%',
    background: '#fff',
    height: 48,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: 12,
  },
  title: {
    fontSize: 16,
    color: "#878ea",
    padding: 12,
    marginBottom: 6,
  },
});

class Menu extends Component {
  toggleDrawer = () => {
    this.props.handleDrawer(!this.props.open);
  }

  render() {
    const { classes, open } = this.props;

    return (
      <div className={classes.appBar}>
        <Button
          className={classes.button}
          color="default"
          aria-label="Menu"
          onClick={this.toggleDrawer}
          >
          <Icon>{open ? 'close' : 'menu'}</Icon>
          More
        </Button>
        <Button
          color="default"
          className={classes.button}
          component={Link} to="/"
        >
          <Icon>home</Icon>
          Home
        </Button>
        <div className={classes.title}> Jenny Michelle </div>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default withStyles(styles)(Menu);

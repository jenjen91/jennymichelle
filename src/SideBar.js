import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 250;

const styles = theme => ({
  root: {
    flexGrow: 0,
  },
  rootopen: {
    marginRight: 12,
  },
  drawer: {
    flexGrow: 0,
  },
  paper: {
    top: 48,
  },
  list: {
    width: drawerWidth,
  },
});

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

class SideBar extends Component {
  toggleDrawer = () => {
    this.props.handleDrawer(!this.props.open);
  }
  handleDrawerOpen = () => {
    this.props.handleDrawer(true);
   };

   handleDrawerClose = () => {
     this.props.handleDrawer(false);
   };

  render() {
    const { classes, theme, open } = this.props;

    return (
      <div
        className={classNames(classes.root, {
          [classes.rootopen]: open,
        })}
      >
        <Drawer
          open={open}
          onClose={this.handleDrawerClose}
          className={classes.drawer}
          classes={{
            paper: classes.paper
          }}
          variant="persistent"
          anchor="left"
        >
        <div className={classes.list}>
          <List component="nav">
            <ListItemLink to="/programming">
              <ListItemText primary="Programming" />
              <ListItemIcon><Icon>apps</Icon></ListItemIcon>
            </ListItemLink>
            <ListItemLink to="/design">
              <ListItemText primary="Graphic Design" />
              <ListItemIcon><Icon>color_lens</Icon></ListItemIcon>
            </ListItemLink>
          </List>
          <Divider />
          <List component="nav">
            <ListItemLink to="/contact">
              <ListItemText primary="Contact" />
              <ListItemIcon><Icon>mail</Icon></ListItemIcon>
            </ListItemLink>
          </List>
        </div>
        </Drawer>
      </div>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default withStyles(styles)(SideBar);

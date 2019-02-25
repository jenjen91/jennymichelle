import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    maxWidth: 500,
    margin: '0px auto'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {sendt: false}
  }

  handleSubmit = (event) => {
    console.dir(event)
    this.setState({sendt: true})
  }
  renderForm = () => {
    const { classes } = this.props;
    return (
      <form name="contact" method="POST" netlify dataNetlifyRecaptcha="true" onSubmit={this.handleSubmit}>
        <TextField
           required
           id="outlined-required"
           label="Name"
           className={classes.textField}
           margin="normal"
           variant="outlined"
           fullWidth
           autoComplete="name given-name family-name"
           name="name"
           type="text"
         />

        <TextField
           required
           id="outlined-required"
           label="Email"
           className={classes.textField}
           margin="normal"
           variant="outlined"
           type="email"
           fullWidth
           autoComplete="email"
           name="email"
         />
         <TextField
           required
           id="outlined-required"
           label="Message"
           multiline
           rows="5"
           className={classes.textField}
           margin="normal"
           variant="outlined"
           fullWidth
         />
        <p>
          <Button variant="contained" type="submit"> Send </Button>
        </p>
      </form>
    );
  }

  renderSuccess = () => (
    <Typography variant="subtitle1" gutterBottom>
      Message successfully submitted.
    </Typography>
  )
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h3" gutterBottom>
          Contact
        </Typography>
        <div className={classes.container}>
          { this.state.sendt ? this.renderSuccess() : this.renderForm() }
        </div>
      </div>
    );
  }
}


Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);

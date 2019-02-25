import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

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
    this.state = {sendt: false, error: false}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({sendt: true});

    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    });
    .catch(error => {
      if(error){ this.setState({error: true})}
    });
  }

  renderForm = () => {
    const { classes } = this.props;
    return (
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
           <label>
             Don’t fill this out:{" "}
             <input name="bot-field" onChange={this.handleChange} />
           </label>
         </p>
        <TextField
           required
           id="outlined-required"
           label="Name"
           className={classes.textField}
           margin="normal"
           variant="outlined"
           fullWidth
           autoComplete="name"
           name="name"
           type="text"
           onChange={this.handleChange}
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
           onChange={this.handleChange}
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
           onChange={this.handleChange}
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
  renderError = () => (
    <Typography variant="subtitle1" gutterBottom>
      Error. Something went wrong, please try again.
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
          { !this.state.sendt ? this.renderForm() : this.state.error ? this.renderError() : this.renderSuccess() }
        </div>
      </div>
    );
  }
}


Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);

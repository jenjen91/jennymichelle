import React, { Component } from 'react';
<<<<<<< HEAD
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
=======
import Typography from '@mui/material/Typography'; // UPDATED IMPORT
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
>>>>>>> 274e2ea4d20355ea9ebdfcee11149c147aad2a0d

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
    })
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        this.setState({error: true})
        return;
      }
    })
    .catch(error => {
      if(error){ this.setState({error: true})}
    });
  }

  renderForm = () => {
<<<<<<< HEAD
    const { classes } = this.props;
=======
>>>>>>> 274e2ea4d20355ea9ebdfcee11149c147aad2a0d
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
           id="name"
           label="Name"
<<<<<<< HEAD
           className={classes.textField}
=======
>>>>>>> 274e2ea4d20355ea9ebdfcee11149c147aad2a0d
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
           id="email"
           label="Email"
<<<<<<< HEAD
           className={classes.textField}
=======
>>>>>>> 274e2ea4d20355ea9ebdfcee11149c147aad2a0d
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
           id="message"
           label="Message"
           multiline
           rows="5"
<<<<<<< HEAD
           className={classes.textField}
=======
>>>>>>> 274e2ea4d20355ea9ebdfcee11149c147aad2a0d
           margin="normal"
           variant="outlined"
           fullWidth
           name="message"
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
<<<<<<< HEAD
    const { classes } = this.props;

=======
>>>>>>> 274e2ea4d20355ea9ebdfcee11149c147aad2a0d
    return (
      <div>
        <Typography variant="h3" gutterBottom>
          Contact
        </Typography>
<<<<<<< HEAD
        <div className={classes.container}>
=======
        <div>
>>>>>>> 274e2ea4d20355ea9ebdfcee11149c147aad2a0d
          { !this.state.sendt ? this.renderForm() : this.state.error ? this.renderError() : this.renderSuccess() }
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
=======
export default Contact;
>>>>>>> 274e2ea4d20355ea9ebdfcee11149c147aad2a0d

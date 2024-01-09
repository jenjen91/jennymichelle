import React, { Component } from 'react';
import Typography from '@mui/material/Typography'; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

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
    return (
      <div>
        <Typography variant="h3" gutterBottom>
          Contact
        </Typography>
        <div>
          { !this.state.sendt ? this.renderForm() : this.state.error ? this.renderError() : this.renderSuccess() }
        </div>
      </div>
    );
  }
}

export default Contact;

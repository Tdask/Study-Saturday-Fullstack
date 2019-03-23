import React, { Component } from 'react';
import axios from 'axios';

export default class NewStudentForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await axios.post('/api/student', this.state);
      res.send(res.data);
      this.setState({
        firstName: '',
        lastName: '',
        email: ''
      });
      // console.log('PROPS: ', this.props);
    } catch (error) {
      console.log(error);
    }
    //when we submit the form we want to make an ajax (non-reloading) post request to the database inserting our new event. so we need to preventDefault behavior, do axios request,(so this will be async), and then send that data back to our render of view
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="FirstName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="LastName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.email}
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

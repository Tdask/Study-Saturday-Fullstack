import React, { Component } from 'react';

export default class NewStudentForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName = '',
      lastName = '',
      email = ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){

  }

  handleSubmit(event){

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value="firstName"
          name="firstName"
          placeholder="FirstName"
          onChange = {this.handleChange}
        />
        <input
          type="text"
          value="lastName"
          name="lastName"
          placeholder="LastName"
        />
        <input type="text" value="email" name="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

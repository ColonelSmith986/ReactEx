import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      newUser: {}
    }
  }

  handleSubmit(e) {
    if(this.refs.name.value === '' || this.refs.zipcode.value === '') {
      alert('Name is missing!')
    } else {
      this.setState({
        newUser: {
          id: uuid.v4(),
          name: this.refs.name.value,
          username: this.refs.username.value,
          email: this.refs.email.value,
          address:{ ...this.state.address, zipcode: this.refs.zipcode.value}
        }}, function() {
          this.props.addUser(this.state.newUser);
        });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
      <h3>Add User</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Name</label><br />
          <input type='text' ref='name' />
        </div>
        <div>
          <label>Username</label><br />
          <input type='text' ref='username' />
        </div>
        <div>
          <label>E-Mail</label><br />
          <input type='text' ref='email' />
        </div>
        <div>
          <label>Zipcode</label><br />
          <input type='text' ref='zipcode' />
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }
}

AddUser.propTypes = {
  name:PropTypes.string,
  username:PropTypes.string,
  email:PropTypes.string,
  zipcode:PropTypes.number,
  addUser:PropTypes.func
}﻿

export default AddUser;

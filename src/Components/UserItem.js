import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserItem extends Component {
  render() {
    return (
      <li className="User">
      {this.props.todo.name} - {this.props.todo.username} - {this.props.todo.email}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo:PropTypes.object
}﻿

export default TodoItem;

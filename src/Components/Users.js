import React, { Component } from 'react';
import ReactTable from "react-table";
import BootstrapTable from 'react-bootstrap-table-next';
import '../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import PropTypes from 'prop-types';

class Users extends Component {
  deleteUser(id) {
    this.props.onDelete(id);
  }

  render() {
      const columns = [{
          text: 'Name',
          dataField: 'name' // String-based value accessors!
        }, {
          text: 'Username',
          dataField: 'username'
        }, {
          text: 'E-Mail',
          dataField: 'email'
        }, {
          text: 'Street',
          dataField: 'address.street'
        }, {
          text: 'Suite',
          dataField: 'address.suite'
        }, {
          text: 'City',
          dataField: 'address.city'
        }, {
          text: 'Phone',
          dataField: 'phone'
        }];

      const expandRow = {
        renderer: row => (
          <div>
            <p>{ `This Expand row is belong to rowKey ${row.address.zipcode}` }</p>
            <form>
              <input type='submit' value='Datensatz löschen' onClick={this.deleteUser.bind(this, row.id)}/>
            </form>
          </div>
        )
      };

    return (
      <div className="Users">
        <h3>Nutzer</h3>
        <BootstrapTable keyField='name' data={this.props.users} columns={ columns } expandRow={ expandRow }/>
      </div>
    );
  }
}

// Todos.propTypes = {
//   todos:PropTypes.array
// }﻿

export default Users;

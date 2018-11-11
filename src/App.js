import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects'
import AddUser from './Components/AddUser'
import Users from './Components/Users'
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        projects: [],
        users: []
      }
  }

  getTodos() {
    // $.ajax({
    //   url: 'https://jsonplaceholder.typicode.com/todos',
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data){
    //     this.setState({todos:data}, function(){
    //       console.log(this.state);
    //     });
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.log(err);
    //   }
    // });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({users:json}));
  }

  getProjects() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      },
    ]})
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(Project) {
    let projects = this.state.projects;
    projects.push(Project);
    this.setState({projects: projects});
  }

  handleAddUser(User) {
    let users = this.state.users;
    users.push(User);
    this.setState({users: users});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  handleDeleteUsers(id) {
    let users = this.state.users;
    let index = users.findIndex(x => x.id === id);
    users.splice(index, 1);
    this.setState({users: users});
  }

  render() {
    return (
      <div className="App">
      <AddUser addUser={this.handleAddUser.bind(this)}/>
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      <hr />
      <Users users={this.state.users} addUser={this.handleAddUser.bind(this)} onDelete={this.handleDeleteUsers.bind(this)}/>
      </div>
    );
  }
}

export default App;

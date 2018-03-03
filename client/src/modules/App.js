import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return ( <
      div className = "App" >

      <
      h1 > Users < /h1> {
        this.state.users.map(user =>
          <
          div >
          <
          Button >
          <
          div key = { user.id } > { user.username } < /div> <
          /Button> <
          /div>
        )
      } <
      /div>
    );
  }
}

export default App;

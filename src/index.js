import React, { Component } from 'react';
//import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

const root = createRoot(document.querySelector('#app'));

class App extends Component{
  constructor(){
    super();
    this.state = {
      users: [],
      things: [],
      view: window.location.hash.slice(1)
    };
  }
  async componentDidMount(){
    try {
      const responses = await Promise.all([
        axios.get('/api/users'),
        axios.get('/api/things'),
      ]);
      this.setState({ users: responses[0].data, things: responses[1].data });
    }
    catch(ex){
      console.log(ex);
    }
  }
  render(){
    const { users, things, view } = this.state;
    console.log(users, things, view);
    return (
      <hr />
    );
  }
}


root.render(<App />);
/*
const root = document.querySelector('#app');
render(React.createElement('hr'), root);
*/

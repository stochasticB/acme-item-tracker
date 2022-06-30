import React, { Component } from 'react';
//import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import Nav from './Nav';
import Users from './Users';
import Things from './Things';
import Home from './Home';

const root = createRoot(document.querySelector('#app'));

class App extends Component{
  constructor(){
    super();
    this.state = {
      users: [],
      things: [],
      view: window.location.hash.slice(1)
    };
    this.createThing = this.createThing.bind(this);
  }
  async createThing(){
    try {
      const response = await axios.post('/api/things', { name: Math.random() });
      const thing = response.data;
      this.setState({ things: [...this.state.things, thing]});
    }
    catch(ex){
      console.log(ex);
    }
  }
  async componentDidMount(){
    window.addEventListener('hashchange', ()=> {
      this.setState({ view: window.location.hash.slice(1) });
    });
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
    const { createThing } = this;
    return (
      <div>
        <Nav things = { things } users = { users } view = { view }/>
        {
          view === '' ? <Home users={ users } things={ things }/> : null
        }
        {
          view === 'users' ? <Users users={ users } /> : null
        }
        {
          view === 'things' ? <Things things={ things } createThing={ createThing }/> : null
        }
      </div>
    );
  }
}


root.render(<App />);
/*
const root = document.querySelector('#app');
render(React.createElement('hr'), root);
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, NavLink } from 'react-router-dom'
import Nav from './Nav'
import Profile from './Profile'

class App extends Component {


  state = {
    name: "Beef"
  }
  render() {
    return (
      <div className="App">


          <div className="">
            <Route path="/" component={Nav}/>

            <Route exact path="/contact" component={Nav}/>
            <Route path="/about-me" render={() => { return <Profile name={this.state.name}/>}} />

          </div>
          <Route path="/languages" component={Languages}/>
          <Route path="/interests" component={Interests}/>
      </div>


    );
  }
}


const SomeMoreInterests = () => <p>Now I'm Fishing</p>
const Interests = () => { return <p>Hey This is the Interests Component. <Link to="/languages">See Languages</Link></p>}
const Languages = () => <p>Swift</p>
export default App;

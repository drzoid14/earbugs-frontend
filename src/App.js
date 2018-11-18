import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import VideoBox from './components/videobox.js'
import Profile from './components/profile.js'
import SignUpForm from './components/signup.js'
import SignInForm from './components/signin.js'
import Home from './components/home.js'
import View from './components/view.js'
import history from './history'
import Banner from './components/banner'
import Welcome from './components/welcome' 


class App extends Component {


  render() {
    return (
      <Router history={history}>
      <div className="App" id="app">
      <header>
        <Banner />
      </header>
        <main>
            <Switch>
                <Redirect exact from="/" to="/welcome" />
                 <Route exact path="/welcome" component={Welcome} />
                 <Route exact path="/profile/:userId" component={Profile} />
                 <Route exact path="/signin" component = {SignInForm} />
                 <Route exact path="/signup" component = {SignUpForm} />
                 <Route exact path="/create" component = {VideoBox} />
                 <Route exact path="/home" component = {Home} />
                 <Route exact path="/view/:videoId" component={View} />
            </Switch>
        </main>
      </div>
      </Router>
        

    );
  }
}
export default App



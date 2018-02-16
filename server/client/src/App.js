import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path='/' component={Welcome} />
            <Route exct path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import SignIn from './components/SignIn';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={SignIn} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
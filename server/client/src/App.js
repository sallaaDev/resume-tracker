import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Wecome from './components/Wecome';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Wecome} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './welcome.css';

class Welcome extends Component {
  render() {
    return (
        <div className="welcome">
        <div>
            <p className="headLine">Track Your Future</p>
            <p className="underText">"Today Is Your Day"</p>
        </div>
            <a href={"/auth/google"} className="loginBtn loginBtn-google">
            Sign Up with Google
            </a>
        </div>
    );
  }
}

export default Welcome;
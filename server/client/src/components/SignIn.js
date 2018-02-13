import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: '350px 1fr'
  },
  headLine: {
    textAlign: 'center',
    margin: '70px 0px 30px 0px',
    fontSize: '6em'
  },
  underText: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '3em'
  }
}

class SignIn extends Component {
  render() {
    return (
      <div style={styles.container}>
      <div>
          <h1 style={styles.headLine}>Your Future Starts Here</h1>
          <p style={styles.underText}>"Today Is Your Day"</p>
      </div>
          <Link to={"/auth/google"} class="loginBtn loginBtn--google">
            Login with Google
          </Link>
      </div>
    );
  }
}

export default SignIn;
import React, { Component } from 'react';

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: '350px 1fr',
    fontWeight: '300'
  },
  headLine: {
    textAlign: 'center',
    margin: '70px 0px 30px 0px',
    fontSize: '5em'
  },
  underText: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '3em'
  },
  header: {
    background: 'linear-gradient(to right, #fdbb2d, #22c1c3)'
}
}

class Wecome extends Component {
  render() {
    return (
      <div>
        <div style={styles.container}>
        <div>
            <p style={styles.headLine}>Track Your Future</p>
            <p style={styles.underText}>"Today Is Your Day"</p>
        </div>
            <a href={"/auth/google"} class="loginBtn loginBtn--google">
            Sign Up with Google
            </a>
        </div>
      </div>
    );
  }
}

export default Wecome;
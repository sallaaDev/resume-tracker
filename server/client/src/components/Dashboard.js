import React, { Component } from 'react';

const styles = {

}

class Dashboard extends Component {
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

export default Dashboard;
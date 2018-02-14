import React, { Component } from 'react';
import {AppBar, FlatButton} from 'material-ui';

const styles = {
    header: {
        background: 'linear-gradient(to right, #fdbb2d, #22c1c3)'
    },
    button: {
        color: '#ffffff'
    }
}

class Header extends Component {
  render() {
    return (
        <AppBar
            title="Resume-Tracker"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={styles.header}
            iconElementRight={
            <a href="/auth/google">
                <FlatButton style={styles.button} label="Logn In" />
            </a>}
        />
    );
  }
}

export default Header;
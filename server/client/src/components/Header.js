import React, { Component } from 'react';
import {AppBar, IconButton, Drawer, MenuItem} from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationApps from 'material-ui/svg-icons/navigation/apps';


const styles = {
    header: {
        background: 'linear-gradient(to right, #fdbb2d, #22c1c3)'
    },
    button: {
        color: '#ffffff',
        paddingTop: '7px' 
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
      }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

  render() {
    return (
        <div>
            <AppBar
                title="Resume-Tracker"
                style={styles.header}
                iconElementLeft={<IconButton><NavigationApps /></IconButton>}
                iconElementRight={
                    <IconButton
                    onClick={this.handleToggle}
                    >
                    <NavigationMenu /></IconButton>
                }
            />
             
            <Drawer 
            docked={false}
            width={250}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
            <MenuItem><a href="https://github.com/AAdevelop/resume-tracker">Github</a></MenuItem>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
            </Drawer>
        </div>
    );
  }
}

export default Header;
import React from 'react';
import { withRouter, Link } from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const style = {
  nav: {
    background: '#3D95CE',
  },
  left: {
    display: 'none',
  },
  log_out: {
    color: '#fff',
  }
};

class Navbar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn: this.props.isLoggedIn
    }
  }

  logOutAndRedirect () {
    this.props.logUserOut();
    this.props.history.push("/login");
  }

  render() {
    return (
      <AppBar 
        className='navbar'
        style={style.nav}
        title={
          <div className='navbar-logo'>
            <Link to="/"><span>Hello Paymo</span></Link>
          </div>
        }
        iconStyleLeft={style.left}
        iconElementRight={
          <div>
            {this.props.isLoggedIn && 
              <FlatButton 
                style={style.log_out}
                hoverColor='#03A9F4'
                className='navbar-logout' 
                onClick={this.logOutAndRedirect.bind(this)} 
                label="Log Out" 
              />
            }
          </div>
        }
      />

    );
  }
}

export default withRouter(Navbar);
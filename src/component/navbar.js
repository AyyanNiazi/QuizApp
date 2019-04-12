import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import * as mui from 'material-ui'

class NavBar extends React.Component{
    
    render(){
        return (
            <div>
            <mui.AppBar 
            title={<span style={styles.title}>Quiz App</span>}
            iconElementRight={<mui.FlatButton label="Login" />}
            />

            // <nav className="nav-wrapper red darken-2">
            //     <div className="container">
            //     <a className="brand-logo left">Patient Tracker App</a>
            //         <ul className="right">
            //             <li><Link to='/home'>Home </Link> </li>
            //             <li><Link to='/login'>Login </Link> </li>
            //             <li><Link to='/contact'>Contact </Link> </li>
            //         </ul>
            //     </div>
            // </nav>
            </div>
        )
    }
}

const styles = {
    title: {
      cursor: 'pointer',
    },
  };
export default NavBar
import React from 'react'
import * as mui from 'material-ui'
import './auth.css'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import { grey500 } from 'material-ui/styles/colors';
import {Link, BrowserRouter,Route,withRouter,Redirect } from 'react-router-dom'
import Home from '../routes'

// const fakeAuth = {
//         isAuthenticated : false,
//         authenticate (cb) {
//             this.isAuthenticated = true
//             setTimeout(cb,100)
//         } ,
//         signout (cb) {
//             this.isAuthenticated = false
//             setTimeout(cb,100);
//         }
// }
const adsd = {}



class UserLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            auth:false,
            open: false,
            toHome: false,
            username: '',
            password: ''
        }

        this.usernameHandler= this.usernameHandler.bind(this)
        this.passwordHandler= this.passwordHandler.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

usernameHandler(e){
    this.setState({
        username: e.target.value
    })
}
passwordHandler(e){
    this.setState({
        password: e.target.value
    })
}

handleClick = () => {
    // fakeAuth.authenticate(()=> {
        this.setState({
            open:true,
            toHome: true
        })
    // })
}

handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  
    render(){
        const {toHome} = this.state
        // const { from } = this.props.location.state || { from: { pathname: '/home' } }
        if (this.state.toHome === true){ 
          return (  <Redirect to='/home' /> )
        }
        const isInvalid = this.state.username != "admin"  || this.state.password != "admin"   
        return(

         <div> 
             <div>
             {/* <mui.AppBar
             title={<span style={styles.title}>Quiz App</span>}
             /> */}
             </div>
            <mui.Card className="login-crime-card" >
                    <mui.CardText>
                        <mui.TextField
                        className='text-field'
                        hintText= "admin"
                        floatingLabelText= "Username"
                        value={this.state.username}
                        // icon={<PersonAdd/>}
                        onChange={this.usernameHandler}
                        />
                        <mui.TextField
                        type="password"
                        floatingLabelText= "Password"
                        value={this.state.password}
                        onChange={this.passwordHandler}
                        />
                    </mui.CardText>
                    <mui.CardActions>
                        <div>
                        <span>
                        <mui.Checkbox
                          label="Remember"
                          className="classRemember"
                          labelStyle={{color: grey500}}
                          iconStyle={{color: grey500, borderColor: grey500,
                          fill: grey500}}
                         />
                         </span>
                         <span> 
                         <mui.RaisedButton
                          label="Submit"
                          type="submit" primary={true}
                          className="raisedbutton"
                          disabled={isInvalid}
                          onClick={this.handleClick}
                          styles={styles}/>
                          </span>
                          <span>
                           <mui.Snackbar
                           open={this.state.open}
                           message="You've Succesfully Logged in"
                           style={{color: 'green'}}
                           autoHideDuration={4000}
                           onRequestClose={this.handleRequestClose}
                           />
                        </span>
                        </div>
                    </mui.CardActions>
                    
                <div>
                     <BrowserRouter>  
                     <div> 
                     <Link to='/signup'>
                     <mui.FlatButton
                     label="Register"                
                     className="registerbt"
                     icon={<PersonAdd />}
                     />
                    </Link> 
                    
                </div>
                    </BrowserRouter>
                </div>
            </mui.Card>
            </div>
        )
    }
}
const styles = {
    title: {
      cursor: 'pointer',
    },
  };

//   export const AuthButton = withRouter(({ history }) => (
//     fakeAuth.isAuthenticated ? (
//       <p>
//         Welcome! <button onClick={() => {
//           fakeAuth.signout(() => history.push('/'))
//         }}>Sign out</button>
//       </p>
//     ) : (
//       <p>You are not logged in.</p>
//     )
//   ))
 


export default UserLogin
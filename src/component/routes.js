import React, {Component} from 'react'
import Home from '../component/home'
import UserLogin from '../component/userAuth/userLogin'
import RenderQuizPage from '../container/renderQuizpage'
import isLoggedIn from './privateRoutes'
import PrivateRoute from './privateRoutes'
import * as mui from 'material-ui'
import {BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'

class Routes extends React.Component{
   constructor(){
       super()
       this.state = { 
           isLoggedin : false
       }
    //   this.logoutHandler= this.logoutHandler.bind(this)
   }

   logoutHandler(){
       this.history.push('/')
   }

   componentDidMount(){
       const {auth } = this.props
   }
   
    render(){
        // let {auth} = this.props.auth
        const home = (
            <div>
                  <mui.AppBar 
                 title={<span  style={styles.title}>Quiz App</span>}
                 iconElementRight="Logout" />
            </div>
                
        )
        const starter = (
            <div>
                 <mui.AppBar 
                 title={<span  style={styles.title}>Quiz App</span>}
                 />
            </div>
        )

        return(
            
            <BrowserRouter>
            <div> 
              <div>
                 <mui.AppBar 
                 title={<span  style={styles.title}>Quiz App</span>}
                 />
                  {/* {auth ? home : starter} */}
              </div>
                <Switch> 
                <Route path='/home' component={Home} />
                <Route path='/quizpage' component={RenderQuizPage}  /> 
                <Route exact path='/' component={UserLogin}  />                 
                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const styles = {
title: {
    cursor: 'pointer'
}

}

// const PrivateRoute  = ({
//     component: Component, ...rest
//   }) => {
//     return (
//       <Route {...rest} render={(props) => (
//         fakeAuth.isAuthenticated === true ?
//         <Component {...props} /> :
//         <Redirect to={{
//             pathname: '/',
//             state: { from: props.location }
//           }} />
//        ) 
//       } />
//     )
//   }

export default Routes
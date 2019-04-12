import React from 'react'
import {Redirect,Route} from 'react-router-dom'
import userLogin from './userAuth/userLogin'

const PrivateRoute  = ({
    
    component: Component, ...rest
  }) => {
    return (
      <Route {...rest} render={(props) => (
        this.props.fakeAuth.isAuthenticated === true ?
        <Component {...props} /> :
        <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
       ) 
      } />
    )
  }

export default PrivateRoute
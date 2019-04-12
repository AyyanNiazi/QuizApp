import React, { Component } from 'react';
// import {BrowserRouter as Router,Redirect, Switch, Route} from 'react-router-dom'
// import NavBar from './component/navbar'
import Routes from './component/routes'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      login : false
    }
  }

  render() {
    console.log("changes Injected")
    const {login} = this.state
    return (
     <div>
      <Routes />
      
     </div>
    );
  }
}



export default App;

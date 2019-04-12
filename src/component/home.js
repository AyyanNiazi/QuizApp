import React from 'react'
import * as mui from 'material-ui'
import {Redirect} from 'react-router-dom'
import './home.css'
import js from './images/js2.png'
import react from './images/react.png'
import angular from './images/angular.png'

class Home extends React.Component{

   constructor(props){
       super(props)
       this.state = { 
           dialogValue: '',
            toLogin : false,
            open: false,
            openDrawer: false,
            openReact: false,
            openJs: false,
            quizPage: false
       }
       this.onhandleClick = this.onhandleClick.bind(this)
       this.handleClose = this.handleClose.bind(this)
       this.dialog = this.dialog.bind(this)
       this.jsdialog = this.jsdialog.bind(this)
       this.reactdialog = this.reactdialog.bind(this)
       this.changeHandler = this.changeHandler.bind(this)
   }

    handleToggle = () =>  {  this.setState({open: !this.state.open})};

    dialog = () => {this.setState({open:true })}
    reactdialog = () => {this.setState({openReact: true })}
    jsdialog = () =>  {this.setState({openJs:true })}

  
    changeHandler = (e) => {
        this.setState({
            dialogValue: e.target.value,
            
        })
    }
    onhandleClick(){
      // this.props.history.push('/signup');
      this.setState({
        toLogin: true
      })
    }
    handleClose=()=> {
        this.setState({
            open: false,
            openDrwaer:false
        })
    }
    handleDrawerClose=()=> {
        this.setState({
            open: false,
        })
    }
    handleSubmit = () => {
        this.setState({
            quizPage: true
        })
    }
    render(){
        const isValid = this.state.dialogValue !== 'q1w2e3r4'

        const {toLogin} = this.state
        if (this.state.toLogin === true ){
          return <Redirect to='/' />
        }
        else if (this.state.quizPage === true) {
            return <Redirect to='/quizpage' />
        }

        const actions = [
            <mui.FlatButton
              label="Submit"
              primary={true}
              disabled={isValid}
              onClick={this.handleSubmit}
            />,
            <mui.FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleDrawerClose}
            />,
          ];
        return(
            <div>
                {/* <mui.AppBar
                title={<span  style={styles.title}>Quiz App</span>} 
                // onClick={this.handleToggle}
                iconElementRight= {<mui.FlatButton label="Logout" 
                onClick={this.onhandleClick} />  }
                /> */}
                 <mui.Drawer width={200}
                 docked={false}
                 openSecondary={false} 
                //  open={this.state.open}>
                >
                    {/* <mui.MenuItem 
                     onClick={() => {this.handleClose()}}>
                     Current Quiz List
                     </mui.MenuItem> 
                     <mui.MenuItem 
                     onClick={this.handleOpenDrawer} >
                     JavaScript
                    
                     </mui.MenuItem> 
                     <mui.MenuItem 
                     onClick={() => {this.handleClose()}}>
                     React
                     </mui.MenuItem> 
                     <mui.MenuItem 
                     onClick={() => {this.handleClose()}}>
                     Angular
                     </mui.MenuItem> 
                     <mui.MenuItem 
                     onClick={() => {this.handleClose()}}>
                     Kotlin
                     </mui.MenuItem> 
                     <mui.MenuItem 
                     onClick={() => {this.handleClose()}}>
                        AI
                     </mui.MenuItem> 
                     <mui.MenuItem 
                     onClick={() => {this.handleClose()}}>
                      X
                     </mui.MenuItem>  */}
                 </mui.Drawer> 
               <div>

               <mui.Paper  className='paper' id='paper' 
                 onClick={this.jsdialog}
                 style={styles} zDepth={5}> <br/>
                 <img src={js} alt=""
                  style={{width: '70px', height: '70px', marginTop: '30px'}} />

                 <span style={{fontSize: '25px', paddingBottom: '30px' }}>
                  Js Quiz
                   </span>

                     <mui.Dialog
                     title="Please Enter valid key "
                     actions={actions}
                     modal={false}
                     openJs={this.state.openJs}
                     onRequestClose={this.handleClose}>
                     JavaScript
                     
                     <mui.TextField
                     type="text"
                     hintText="q1w2e3r4"
                     required
                     value={this.state.dialogValue}
                     onChange={this.changeHandler} />
                     </mui.Dialog>
                 </mui.Paper>

                 <mui.Paper  className='paper' id='paper' 
                 onClick={this.reactdialog}
                 style={styles} zDepth={5}> <br/>
                 <img src={react} alt=""
                  style={{width: '70px', height: '70px', marginTop: '30px'}} />

                 <span style={{fontSize: '25px', paddingBottom: '30px' }}>
                  React Quiz </span>
                     <mui.Dialog
                     title="Please Enter valid key"
                     actions={actions}
                     modal={false}
                     openReact={this.state.openReact}
                     onRequestClose={this.handleClose}>
                     React
                     <mui.TextField
                     type="text"
                     hintText="q1w2e3r4"
                     required
                     value={this.state.dialogValue}
                     onChange={this.changeHandler} />
                     </mui.Dialog>
                 </mui.Paper>

                 <mui.Paper  className='paper' id='paper' 
                 onClick={this.dialog}
                 style={styles} zDepth={5}> <br/>
                 <img src={angular} alt=""
                  style={{width: '70px', height: '70px', marginTop: '30px'}} />

                 <span style={{fontSize: '25px', paddingBottom: '30px' }}>
                  Angular Quiz </span>
                     <mui.Dialog
                     title="Please Enter valid key "
                     actions={actions}
                     modal={false}
                     open={this.state.open}
                     onRequestClose={this.handleClose}>

                     <mui.TextField
                     type="text"
                     hintText="q1w2e3r4" required
                     floatingLabelText= "Key"                     
                     value={this.state.dialogValue}
                     onChange={this.changeHandler} />

                     </mui.Dialog>
                 </mui.Paper>

               </div>
              
                
            </div>
        )
    }
}

const styles = {
    height: 200,
    width: 260,
    margin: 30,
    textAlign: 'center',
    display: 'inline-block',
    cursor: 'pointer',
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
      slide: {
        padding: 10,
      },
    title: {
      cursor: 'pointer',
    },
  };

 

export default Home
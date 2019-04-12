import React from 'react';
import {Redirect} from 'react-router-dom'
import './quizStyling.css'

export default class DialogBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            againStart : false,
            time : 'begin',
            title: 'Welcome to Quiz',
            text : 'Mini startup Quiz Application using Custom Code & APi</br> currently its consist React & React-router-dom using private routing </br> </br> Its dynamically load the question answer and render in component',
            btnText: 'start Quiz'
        }
        this.dialogHandler = this.dialogHandler.bind(this);
    }

dialogHandler  ()  {
    let {time} = this.state

    if(time === 'begin'){
        this.setState({
            time: 'end',
            title: 'Congratulation',
            btnText: 'Exit'
        })
    this.props.startQuiz()
    }
    else{
        console.log("Start quiz handler")
      this.setState({
          againStart: true
      })
    }
}

componentWillReceiveProps(nextProps){
    // let {score } = this.props
    console.log("will reacieve props "+nextProps)
    console.log("Score"+ this.props.score) // score props is coming but not updating due to some reason and i also dont know WHAT reason behind this
    this.setState({
        text: 'You have completed the quiz. <br /> You Scored: <strong>' + this.props.score + '</strong> out of <strong>' + this.props.total +'</strong> questions right.'
    })
}

createMarkup = (text) => {
    return { __html: text }
}

    render(){

        let {againStart, title,text,btnText} = this.state
        let { style} = this.props
        let {score} = this.props
        if(this.props.score === true) {
            console.log('Score props working' )
            
        }
        if(againStart === true){
        return(
            <Redirect to='/'/>
            )     
        }
        
        return(
            <div className='dialog-container' style={style}>
                <div className='container' >
                    <div className="col-md-8 col-md-offset-2">
                        <div className="dialog">
                            <h1> {title} </h1>
                            <p dangerouslySetInnerHTML={this.createMarkup(text)}></p>
                            <button className='btn' onClick={this.dialogHandler}>{btnText}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


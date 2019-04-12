import React from 'react'
import { Redirect } from 'react-router-dom'
import customApi from './customApi'
import DialogBox from './dialogBox'
import RenderAnswerOption from './answers'
import * as mui from 'material-ui'
import './quizStyling.css'


class RenderQuizPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked : false,
            rank: 0,
            total: customApi.length,
            showButton: false,
            questionAnswered: false,
            displayDialog: 'flex',
            score: 0,
            logout: false
        }
        this.nextQuestion = this.nextQuestion.bind(this)
        this.increaseScoreHandler = this.increaseScoreHandler.bind(this)
        this.showButtonHandler = this.showButtonHandler.bind(this)
        this.handleStartQuiz = this.handleStartQuiz.bind(this)
        this.logoutHandler = this.logoutHandler.bind(this)
        this.checkHandler = this.checkHandler.bind(this)
    }

    pushData = (rank) => {
        this.setState({
            question: customApi[rank].question,
            answers: [customApi[rank].answers[0], customApi[rank].answers[1], customApi[rank].answers[2], customApi[rank].answers[3],],
            correct: customApi[rank].correct,
            rank: this.state.rank + 1
        })
    }
    componentWillMount() {
        console.log("Custom Api" + customApi)
        let { rank } = this.state
        this.pushData(rank)
    }

    nextQuestion = () => {
        this.setState({checked: false})
        let { rank, total, score } = this.state
        if (rank === total) {
            this.setState({
                displayDialog: 'flex'
            })
        }
        else {
            this.pushData(rank);
            this.setState({ showButton: false, questionAnswered: false })
        }
    }

    showButtonHandler = () => {
        console.log('show button working')
        this.setState({
            showButton: true,
            questionAnswered: true,
        })
    }

    increaseScoreHandler = () => {
        let { check,score } = this.state
        console.log("render quiz"+this.state.score + 1);
        
            this.setState({
                score: this.state.score + 1
            })
        }
        
       
    

    checkHandler=(arg)=>{

    }

    handleStartQuiz = () => {

        this.setState({
            displayDialog: 'none',
            rank: 1
        });
    }

    logoutHandler = () => {
        this.setState({
            logout: true
        })
    }
    updateCheck(bool){
        this.setState({checked: bool});
        console.log('working')
    }
    render() {

        const { rank, logout, total, question, showButton, answers, correct, score, questionAnswered, displayDialog, checked } = this.state;
        console.log(checked);
        if (logout === true) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div>
                <div>
                    {/* <mui.AppBar
                  title={<span style={styles.title}>Quiz App</span>}
                  iconElementRight={<mui.FlatButton label="Logout" onClick={this.logoutHandler} />}
                  /> */}
                    <div className='container'>
                        <DialogBox style={{ display: displayDialog }} score={score} total={total} startQuiz={this.handleStartQuiz} />

                        <div className='row'>
                            <div className='col-lg-10 col-lg-offset-1'>
                                <div id="question" >
                                    <h4>Question no : {rank}/{total}</h4>
                                    <p>{question} </p>
                                </div>
                                <RenderAnswerOption checked={checked} updateCheck={() => this.updateCheck('bool')} answers={answers} correct={correct} showButton={this.showButtonHandler} isAnswered={questionAnswered} check={this.checkHandler} 
                                disabled={this.state.isbutton} increaseScore={this.increaseScoreHandler} />
                                <div id='submit'>
                                    {showButton ? <button className='btn' onClick={this.nextQuestion}> {rank === total ? 'Finish Quiz' : 'Next Question'}</button> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    title: {
        cursor: 'pointer',
    },
};
export default RenderQuizPage
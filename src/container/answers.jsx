import React from 'react'
import RenderQuizPage from './renderQuizpage'
import './quizStyling.css'

export default class RenderAnswerOption extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isAnswerd: false,
            check: false,
            initialClass : ['','','','']  ,
            check: false,  
        }
        this.checkAnswer = this.checkAnswer.bind(this)
    }

    checkAnswer = (eve) => {
        let {isAnswerd,initialClass} = this.state;

        if (!isAnswerd) {
            console.log("running")
            let ect = eve.currentTarget
            console.log(ect);
            let {correct, increaseScore} = this.props
            let answer =(ect.getAttribute('api-id'))*1;
            console.log(correct);
            console.log(ect);
            
            console.log(answer);
            let updateClass = this.state.initialClass;
            let {checked} = this.props;
            console.log(checked);
            
            if(!checked){ 
                if(answer === correct){ //nested
                    var {increaseScore} = this.props
                    updateClass [answer-1] = 'right'
                    // this.setState({
                    //     check:false
                    // })
                    this.props.updateCheck(true);
                
                    console.log('score incresing'+ this.props.increaseScore)
                    // if(!this.state.check){
                       
                        this.props.increaseScore();
                    }

                   
                else {
                    updateClass[answer-1] = 'wrong'
                }
              
            
            }
        this.setState({
            initialClass: updateClass,
            check: true,
        })
        this.props.showButton();

            }
    }
componentDidMount(){
    this.setState({
        initialClass: ['','','','']
    })
}
componentWillReceiveProps(nextProps){
    console.log(nextProps);
}
    shouldComponentUpdate(nextProps, nextState){
            // this.setState({
            //     initialClass : ['','','','']    
            // });
            const { initialClass } = this.state;
            console.log(initialClass);
            console.log(nextState.initialClass);
            if(nextState.initialClass == initialClass){
                this.setState({
                    initialClass : ['','','','']    
                });
            return true
            }
            else{
                
                return false
            }
            // return({initialClass: ['','','',''] })
            
    }

    
    render(){
        let {answers} = this.props;
        let {initialClass,check} = this.state;



        return(
            <div className="answers">
                <ul>
                    <li onClick={this.checkAnswer} className={initialClass[0]} api-id='1'><span>
                    A</span> <p>{answers[0]}</p> </li>
                    <li onClick={this.checkAnswer} className={initialClass[1]} api-id='2'><span>
                    B</span> <p>{answers[1]}</p> </li>
                    <li onClick={this.checkAnswer} className={initialClass[2]} api-id='3'><span>
                    C</span> <p>{answers[2]}</p> </li>
                    <li onClick={this.checkAnswer} className={initialClass[3]} api-id='4'><span>
                    D</span> <p>{answers[3]}</p> </li>
                </ul>
            </div>

        )
    }
}
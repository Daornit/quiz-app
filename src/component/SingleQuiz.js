import React from 'react'
import PropTypes from 'prop-types'
import './single-quiz.css'
class SingleQuiz extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            value: props.selectedVal === 0 || props.selectedVal ? props.selectedVal: 999
        }
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        console.log(this.props.isLast);
        if(this.state.value === 999) return
        let answerId = this.state.value
        this.setState({value: 999});
        event.preventDefault();
        this.props.nextQuiz(answerId)
    }
  
    render() {
        let { question, answers, nextQuiz } = this.props;
        return (
            <div className="single-quiz-container">
                <div className="single-quiz-question">{question}</div>
                <select value={this.state.value} onChange={e => this.handleChange(e)}>
                    <option value={999}></option>
                    {answers.map((i, index)=> (
                        <option key={index} value={index}>{i}</option>
                    ))}
                </select>
                {nextQuiz ? <button className="single-quiz-button" onClick={
                        e => this.handleSubmit(e)
                }>Next Quiz</button> : ""}
            </div>
        )
    }
}
  
SingleQuiz.propTypes = {
    question: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    isLast: PropTypes.bool,
    nextQuiz: PropTypes.func,
}
  
export default SingleQuiz
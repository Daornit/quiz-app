import React from 'react';
import { connect } from 'react-redux';
import { nextQuiz, finishQuiz, setUpQuiz } from '../actions';
import SingleQuiz from '../component/SingleQuiz';
import Result from '../component/Result';
import styles from '../Button.module.css'
const QuezController = ({isInit, isLast, isFinished, answerArray, success, failure, question, answers, nextQuiz, finishQuiz, setUpQuiz}) => {
    return (<div>
        {isInit && !isLast? <SingleQuiz question={question} answers={answers} nextQuiz={nextQuiz}/> : ''}
        {isLast && !isFinished? <button className={styles.btn} onClick={e => {e.preventDefault(); finishQuiz()}}>Analyze Quizs</button>: ''} 
        {isFinished ? <Result answerArray={answerArray} success={success} failure={failure} setUpQuiz={setUpQuiz}></Result>: ""}
    </div>)
}

const mapStateToProps = (state) => ({
    isInit: state.isInit,
    isLast: state.maxQuizNumber === state.currentQuizId,
    isFinished: state.result['success'].length || state.result['failure'].length,
    question: state.isInit && state.maxQuizNumber !== state.currentQuizId ? state.selectedQuizs[state.currentQuizId].question: '',
    answers: state.isInit && state.maxQuizNumber !== state.currentQuizId ? state.selectedQuizs[state.currentQuizId].answers: [],
    success: state.result.success,
    failure: state.result.failure,
    answerArray: state.answerArray
})

const mapDispatchToProps = (dispatch) => ({
    nextQuiz: (answerId) => dispatch(nextQuiz(answerId)),
    finishQuiz: () => dispatch(finishQuiz()),
    setUpQuiz: () => dispatch(setUpQuiz())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuezController)
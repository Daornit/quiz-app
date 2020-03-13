import React from 'react';
import SingleQuiz from "./SingleQuiz";
import './result.css';

const Result = ({success, failure, setUpQuiz}) => (
    <div>
        <div className='container'>
            <div className='result-success'>
                {success.map((quiz, index) => (<SingleQuiz selectedVal={quiz.correctIndex} question={quiz.question} answers={quiz.answers}/>))}
            </div>
            <div className='result-failure'>
                {failure.map((quiz, index) => (<SingleQuiz selectedVal={quiz.correctIndex} question={quiz.question} answers={quiz.answers}/>))}
            </div>
        </div>
        <button className='result-button' onClick={e => {e.preventDefault(); setUpQuiz()}}>Start Over</button>
    </div>
    
);

export default Result;
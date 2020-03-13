import React from 'react';
import { connect } from 'react-redux';
import { setUpQuiz } from '../actions';
import PropTypes from 'prop-types'
import styles from '../Button.module.css';

const StartPage = ({onStartButton, isInit}) => {
    console.log("isInit :: ", isInit)
    return <div>
                {!isInit ? <div >
                                <button className={styles.btn} onClick={
                                    e => {
                                        e.preventDefault()
                                        onStartButton()
                                    }
                                }>Start Quiz</button>
                            </div>: ''}
            </div>
}

StartPage.propTypes = {
    isInit: PropTypes.bool.isRequired,
    onStartButton: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    isInit: state.isInit
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onStartButton: () => dispatch(setUpQuiz())
})

export default connect(mapStateToProps, mapDispatchToProps)(StartPage)
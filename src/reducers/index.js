import {
    SET_UP_QUIZ,
    FINISH_QUIZ,
    NEXT_QUIZ,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from "../actions";
import { randomSelectedArrayOfIndex } from "../utils";
const initialState = {
    rootQuizs: [{
            "question": "What is the scientific name of a butterfly?",
            "answers": [
                "Apis",
                "Coleoptera",
                "Formicidae",
                "Rhopalocera"
            ],
            "correctIndex": 3
        },
        {
            "question": "How hot is the surface of the sun?",
            "answers": [
                "1,233 K",
                "5,778 K",
                "12,130 K",
                "101,300 K"
            ],
            "correctIndex": 1
        },
        {
            "question": "Who are the actors in The Internship?",
            "answers": [
                "Ben Stiller, Jonah Hill",
                "Courteney Cox, Matt LeBlanc",
                "Kaley Cuoco, Jim Parsons",
                "Vince Vaughn, Owen Wilson"
            ],
            "correctIndex": 3
        },
        {
            "question": "What is the capital of Spain?",
            "answers": [
                "Berlin",
                "Buenos Aires",
                "Madrid",
                "San Juan"
            ],
            "correctIndex": 2
        },
        {
            "question": "What are the school colors of the University of Texas at Austin?",
            "answers": [
                "Black, Red",
                "Blue, Orange",
                "White, Burnt Orange",
                "White, Old gold, Gold"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is 70 degrees Fahrenheit in Celsius?",
            "answers": [
                "18.8889",
                "20",
                "21.1111",
                "158"
            ],
            "correctIndex": 2
        },
        {
            "question": "When was Mahatma Gandhi born?",
            "answers": [
                "October 2, 1869",
                "December 15, 1872",
                "July 18, 1918",
                "January 15, 1929"
            ],
            "correctIndex": 0
        },
        {
            "question": "How far is the moon from Earth?",
            "answers": [
                "7,918 miles (12,742 km)",
                "86,881 miles (139,822 km)",
                "238,400 miles (384,400 km)",
                "35,980,000 miles (57,910,000 km)"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is 65 times 52?",
            "answers": [
                "117",
                "3120",
                "3380",
                "3520"
            ],
            "correctIndex": 2
        },
        {
            "question": "How tall is Mount Everest?",
            "answers": [
                "6,683 ft (2,037 m)",
                "7,918 ft (2,413 m)",
                "19,341 ft (5,895 m)",
                "29,029 ft (8,847 m)"
            ],
            "correctIndex": 3
        },
        {
            "question": "When did The Avengers come out?",
            "answers": [
                "May 2, 2008",
                "May 4, 2012",
                "May 3, 2013",
                "April 4, 2014"
            ],
            "correctIndex": 1
        },
        {
            "question": "What is 48,879 in hexidecimal?",
            "answers": [
                "0x18C1",
                "0xBEEF",
                "0xDEAD",
                "0x12D591"
            ],
            "correctIndex": 1
        }
    ],
    selectedQuizs: [],
    answerArray: [],
    result: {
        success: [],
        failure: [],
    },
    currentQuizId: 0,
    maxQuizNumber: 6,
    isInit: false,
    filter: VisibilityFilters.SHOW_ALL
}

const rootReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case SET_UP_QUIZ:
            state.isInit = true;
            state.selectedQuizs = randomSelectedArrayOfIndex(state.rootQuizs.length, 6).map(index => state.rootQuizs[index])
            state.result.success = []
            state.result.failure = []
            state.answerArray = []
            state.currentQuizId = 0;
            return Object.assign({}, state);
        case FINISH_QUIZ:
            state.selectedQuizs.forEach((quiz, index) => {
                if(quiz.correctIndex + '' === state.answerArray[index]){
                    state.result.success.push(quiz);
                } else {
                    state.result.failure.push(quiz);
                }
            });
            return Object.assign({}, state);
        case NEXT_QUIZ:
            state.answerArray.push(action.answerId)
            state.currentQuizId++;
            return Object.assign({}, state);
        case SET_VISIBILITY_FILTER:
            state.filter = action.filter
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default rootReducer;
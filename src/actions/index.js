
/**
 * QUIZ app-d байх ёстой action гууд 
 * 1. SET_UP_QUIZ /Асуултуудыг санамсаргүй байдлаар байршуулах./
 * 2. REFRESH_QUIZ /Асуулт хариултыг эхнээс нь эхлүүлнэ./
 * 4. FINISH_QUIZ /Асуулт хариултыг дуусгах эцсийн үг дүнг авах хүсэлт илгээх./
 * 5. PERSONAL_BEST /Хувийн дээд амжилтыг харуулна./
 * 6. NEXT_QUIZ /Дараагын хариулах асуултыг захиалах/
 * 7. SET_VISIBILITY_FILTER /Хариултаас зөв, буруу, бүгд гэх байдлаар хариултаа харах боломжтой./
 **/
export const SET_UP_QUIZ = 'SET_UP_QUIZ'
export const FINISH_QUIZ = 'FINISH_QUIZ'
export const NEXT_QUIZ = 'NEXT_QUIZ'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_SUCCESS: 'SHOW_SUCCESS',
    SHOW_FAIL: 'SHOW_FAIL'
}

export const setUpQuiz = () => ({
    type: SET_UP_QUIZ
})

export const finishQuiz = () => ({
    type: FINISH_QUIZ,
})

export const nextQuiz = (answerId) => ({
    type: NEXT_QUIZ,
    answerId
})

export const setVisibilityFilterForResult = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})
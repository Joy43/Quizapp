 
 import { createSlice } from '@reduxjs/toolkit'
 import type { PayloadAction } from '@reduxjs/toolkit'

 interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
 }

 interface QuizState {
    questions: Question[];
    answers: string[];
    currentQuestionIndex: number;
    quizOver: boolean;
    score: number;
 }

 const initialState: QuizState = {
    questions: [],
    answers: [],
    currentQuestionIndex: 0,
    quizOver: false,
    score: 0
 };

 export const quizSlice=createSlice({
    name:'quiz',
    initialState,
    reducers:{
        setQuestions(state,action: PayloadAction<Question[]>){
            state.questions=action.payload
        },
        nextQuestion(state){
            state.currentQuestionIndex++
        },
        prevQuestion(state){
            state.currentQuestionIndex--
        },
        selectAnswer(state,action: PayloadAction<string>){
            state.answers[state.currentQuestionIndex]=action.payload
        },
        endQuiz(state){
            state.quizOver=true
            state.score=state.answers.filter((answer,index)=>answer===state.questions[index].correctAnswer).length
        }
    }
})
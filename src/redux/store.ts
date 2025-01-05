import { configureStore } from '@reduxjs/toolkit'
import { quizSlice } from './features/quiz/quizSlice'
// ...

export const store = configureStore({
  reducer: {
    quiz:quizSlice.reducer
    
  }
})


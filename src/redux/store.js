import { configureStore } from '@reduxjs/toolkit'
import darkmodeReducer from './darkmode'
export const store = configureStore({
  reducer: {
    darkmode:darkmodeReducer
  },
})
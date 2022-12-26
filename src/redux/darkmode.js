import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    darkmode:false
}

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    DarkMode: (state) => {
      state.darkmode = !state.darkmode
    }
  },
})
export const { DarkMode } = counterSlice.actions
export default counterSlice.reducer
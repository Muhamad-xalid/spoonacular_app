import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkmode:false
}

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    DarkMode: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.darkmode = !state.darkmode
    }
  },
})

// Action creators are generated for each case reducer function
export const { DarkMode } = counterSlice.actions

export default counterSlice.reducer
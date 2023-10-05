import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

// Define a type for the slice state
interface startState {
  value: string
}

// Define the initial state using that type
const initialState: startState = {
  value: "",
}

export const startSlice = createSlice({
  name: 'start',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setStart: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setStart } = startSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const startPlayers = (state: RootState) => state.start.value

export default startSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

// Define a type for the slice state
interface Color1ChoiceState {
  value: string
}

// Define the initial state using that type
const initialState: Color1ChoiceState = {
  value: "",
}

export const Color1ChoiceSlice = createSlice({
  name: 'player1Choice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPlayer1Color: (state, action: PayloadAction<string>) => {
        state.value = action.payload
    },
  },
})

export const { setPlayer1Color } = Color1ChoiceSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPlayer1Color = (state: RootState) => state.player1Choice.value

export default Color1ChoiceSlice.reducer
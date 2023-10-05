import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

interface Color2ChoiceState {
  value: string
}

// Define the initial state using that type
const initialState: Color2ChoiceState = {
  value: "",
}

export const Color2ChoiceSlice = createSlice({
  name: 'player2Choice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPlayer2Color: (state, action: PayloadAction<string>) => {
        state.value = action.payload
    },
  },
})

export const { setPlayer2Color } = Color2ChoiceSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPlayer2Color = (state: RootState) => state.player2Choice.value

export default Color2ChoiceSlice.reducer
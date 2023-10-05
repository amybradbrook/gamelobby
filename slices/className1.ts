import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

// Define a type for the slice state
interface Name1State {
  value: string
}

// Define the initial state using that type
const initialState: Name1State = {
  value: "",
}

export const Name1Slice = createSlice({
  name: 'className1',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setClassName1: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setClassName1 } = Name1Slice.actions

// Other code such as selectors can use the imported `RootState` type
export const name1StateInfo = (state: RootState) => state.className1.value

export default Name1Slice.reducer
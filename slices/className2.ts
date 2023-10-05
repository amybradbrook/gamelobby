import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

// Define a type for the slice state
interface Name2State {
  value: string
}

// Define the initial state using that type
const initialState: Name2State = {
  value: "invisible",
}

export const Name2Slice = createSlice({
  name: 'className2',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setClassName2: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setClassName2 } = Name2Slice.actions

// Other code such as selectors can use the imported `RootState` type
export const name2StateInfo = (state: RootState) => state.className2.value

export default Name2Slice.reducer
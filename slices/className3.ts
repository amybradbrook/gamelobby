import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

// Define a type for the slice state
interface Name3State {
  value: string
}

// Define the initial state using that type
const initialState: Name3State = {
  value: "invisible",
}

export const Name3Slice = createSlice({
  name: 'className3',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setClassName3: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setClassName3 } = Name3Slice.actions

// Other code such as selectors can use the imported `RootState` type
export const name3StateInfo = (state: RootState) => state.className3.value

export default Name3Slice.reducer
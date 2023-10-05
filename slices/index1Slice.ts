import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

// Define a type for the slice state
interface Index1State {
  value: number
}

// Define the initial state using that type
const initialState: Index1State = {
  value: 0,
}

export const Index1Slice = createSlice({
  name: 'index1',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementIndex1: (state) => {
      state.value += 1
    },
    decrementIndex1: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    DecrementByAmountIndex1: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
  },
})

export const { incrementIndex1, decrementIndex1, DecrementByAmountIndex1 } = Index1Slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectIndex1 = (state: RootState) => state.index1.value

export default Index1Slice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

// Define a type for the slice state
interface Index2State {
  value: number
}

// Define the initial state using that type
const initialState: Index2State = {
  value: 0,
}

export const Index2Slice = createSlice({
  name: 'index2',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementIndex2: (state) => {
      state.value += 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    DecrementByAmountIndex2: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
  },
})

export const { incrementIndex2, DecrementByAmountIndex2 } = Index2Slice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectIndex2 = (state: RootState) => state.index2.value

export default Index2Slice.reducer
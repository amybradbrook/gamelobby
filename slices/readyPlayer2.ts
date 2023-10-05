import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

interface readyPlayer2State {
  value: string
}

const initialState: readyPlayer2State = {
  value: "",
}

export const readyPlayer2Slice = createSlice({
  name: 'readyPlayer2',
  initialState,
  reducers: {
    setReady: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setReady } = readyPlayer2Slice.actions

export const readyPlayer2 = (state: RootState) => state.readyPlayer2.value

export default readyPlayer2Slice.reducer
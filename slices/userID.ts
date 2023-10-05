import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store'

interface userIDState {
  value: string
}

const initialState: userIDState = {
  value: "",
}

export const userIDSlice = createSlice({
  name: 'userID',
  initialState,
  reducers: {
    setUserID: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setUserID } = userIDSlice.actions

export const selectUserID= (state: RootState) => state.userID.value

export default userIDSlice.reducer
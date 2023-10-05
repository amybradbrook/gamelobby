import { combineReducers, configureStore } from "@reduxjs/toolkit";
import index1Reducer from "@/slices/index1Slice";
import className1Reducer from "@/slices/className1";
import className2Reducer from "@/slices/className2";
import className3Reducer from "@/slices/className3";
import index2Reducer from "@/slices/index2Slice";
import readyPlayer2Reducer from "@/slices/readyPlayer2";
import startReducer from "@/slices/startSlice";
import player1ChoiceReducer from "@/slices/playerChoice1";
import player2ChoiceReducer from "@/slices/playerChoice2";
import userIDReducer from "@/slices/userID";


export const store = configureStore({
    reducer: {
        index1:index1Reducer,
        index2:index2Reducer,
        className1: className1Reducer,
        className2: className2Reducer,
        className3: className3Reducer,
        readyPlayer2: readyPlayer2Reducer,
        start: startReducer,
        player1Choice: player1ChoiceReducer,
        player2Choice: player2ChoiceReducer,
        userID: userIDReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

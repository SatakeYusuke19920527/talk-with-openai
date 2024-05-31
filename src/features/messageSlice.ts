import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { MessageType } from '../types/types';

type InitialStateType = {
  onyourdata: MessageType[];
  ragextra: MessageType[];
};

const initialState: InitialStateType = {
  onyourdata: [],
  ragextra: [],
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    inputMessageToReduxStore: (state, action) => {
      if (action.payload.pathname === '/') {
        state.onyourdata.push(action.payload);
      } else if (action.payload.pathname === '/rag-extra') {
        state.ragextra.push(action.payload);
      }
    },
  },
});

export const { inputMessageToReduxStore } = messageSlice.actions;

export const selectMessage = (state: RootState) => state.message;

export default messageSlice.reducer;

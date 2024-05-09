import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
type updateUserState = {
  syncuser: boolean;
};
type InitialState = {
  value: updateUserState;
};

const initialState = {
  value: {
    syncuser: false,
  } as updateUserState,
} as InitialState;

export const updateUser = createSlice({
  name: "update-user",
  initialState,
  reducers: {
    SyncUser: (state, actions: PayloadAction<boolean>) => {
      return {
        value: {
          syncuser: actions.payload,
        },
      };
    },
  },
});

export const {SyncUser} = updateUser.actions;

export default updateUser.reducer;

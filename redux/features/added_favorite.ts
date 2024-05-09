import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UpdateOrder = {
  syncFavorite: boolean;
};
type InitialState = {
  value: UpdateOrder;
};

const initialState = {
  value: {
    syncFavorite: false,
  } as UpdateOrder,
} as InitialState;

export const updateFavorite = createSlice({
  name: "update_order",
  initialState,
  reducers: {
    SyncFavorite: (state, actions: PayloadAction<boolean>) => {
      return {
        value: {
          syncFavorite: actions.payload,
        },
      };
    },
  },
});

export const {SyncFavorite} = updateFavorite.actions;

export default updateFavorite.reducer;

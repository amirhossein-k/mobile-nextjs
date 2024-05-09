import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UpdateOrder = {
  syncorder: boolean;
};
type InitialState = {
  value: UpdateOrder;
};

const initialState = {
  value: {
    syncorder: false,
  } as UpdateOrder,
} as InitialState;

export const updateOrder = createSlice({
  name: "update_order",
  initialState,
  reducers: {
    SyncOrder: (state, actions: PayloadAction<boolean>) => {
      return {
        value: {
          syncorder: actions.payload,
        },
      };
    },
  },
});

export const {SyncOrder} = updateOrder.actions;

export default updateOrder.reducer;

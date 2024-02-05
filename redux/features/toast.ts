import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState = {};

interface Payload {
  title1: string;
  title2?: string;
  title3?: string;
  number?: number;
}

export const Alart = createSlice({
  name: "tost-alert",
  initialState,
  reducers: {
    toast_alart: (state, actions: PayloadAction<Payload>) => {
      toast.success(
        `${actions.payload.title1} ${actions.payload?.title2 ?? ""}  ${
          actions.payload?.title3 ?? ""
        } ${actions.payload?.number ?? ""}`
      );
      return {
        initialState,
      };
    },
  },
});

export const {toast_alart} = Alart.actions;

export default Alart.reducer;

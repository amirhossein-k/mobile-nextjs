import {configureStore} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {TypedUseSelectorHook} from "react-redux/es/types";
import syncUser from "./features/updateuser-slice";
import Alart from "./features/toast";

export const store = configureStore({
  reducer: {syncUser, Alart},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

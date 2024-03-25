import {configureStore} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {TypedUseSelectorHook} from "react-redux/es/types";
import syncUser from "./features/updateuser-slice";
import Alart from "./features/toast";
import syncOrder from "./features/added_order";
import SyncFavorite from "./features/added_favorite";

export const store = configureStore({
  reducer: {syncUser, Alart, syncOrder, SyncFavorite},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

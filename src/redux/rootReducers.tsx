import { combineReducers } from "@reduxjs/toolkit";
import friendListSliceReducer from "./reducers/friendListSlice";

const rootReducer = combineReducers({
  friendListSlice: friendListSliceReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

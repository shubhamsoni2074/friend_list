import { createSlice } from "@reduxjs/toolkit";
import { IFriendData } from "../../Models/IFriendData";
import { RootState } from "../rootReducers";

type InitialStateType = {
  fullList: IFriendData[];
};
type AddActionType = { payload: IFriendData; type: string };
type RemoveActionType = { payload: string; type: string };
type StarActionType = { payload: string; type: string };

const initialState: InitialStateType = {
  fullList: [],
};

const friendListSlice = createSlice({
  name: "friendListSlice",
  initialState: initialState,
  reducers: {
    add: (state, action: AddActionType) => {
      state.fullList = [...state.fullList, action.payload];
    },
    favorite: (state, action: StarActionType) => {
      const item = state.fullList.find((q) => q.id == action.payload);
      if (item) item.favorite = !item?.favorite;
    },
    remove: (state, action: RemoveActionType) => {
      const filtered = state.fullList?.filter(
        (q) => !q.id.includes(action.payload)
      );

      state.fullList = filtered;
    },
  },
});

export const { add, remove, favorite } = friendListSlice.actions;

export const selectFriendList = (store: RootState) => store.friendListSlice;

export default friendListSlice.reducer;

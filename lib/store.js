import { configureStore } from "@reduxjs/toolkit";
import taskApiSlice from "./features/task/taskApiSlice";
import boardApiSlice from "./features/board/boardsSlice";
import boardReducer from "./features/board/";

export const store = configureStore({
  reducer: {
    [taskApiSlice.reducerPath]: taskApiSlice.reducer,
    [boardApiSlice.reducerPath]: boardApiSlice.reducer,
    board: boardReducer,
  },
});

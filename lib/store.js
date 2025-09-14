import { configureStore } from "@reduxjs/toolkit";
import taskApiSlice from "./features/task/taskApiSlice";
import boardReducer from "./features/board/boardSlice";

export const store = configureStore({
  reducer: {
    [taskApiSlice.reducerPath]: taskApiSlice.reducer,
    board: boardReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(taskApiSlice.middleware);
  },
});

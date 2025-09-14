const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  boardId: "",
  board: {},
  formOpen: false,
  isLoading: true,
  activeTask: { name: "", description: "", icon: "", status: "", id: "" },
  tasks: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    toggleForm(state) {
      state.formOpen = !state.formOpen;
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setBoardId(state, action) {
      state.boardId = action.payload;
    },
    setActiveTask(state, action) {
      state.activeTask = action.payload;
    },
    setTasks(state, action) {
      state.tasks = action.payload;
    },
  },
});

export const {
  toggleForm,
  toggleLoading,
  setBoardId,
  setTasks,
  setActiveTask,
} = boardSlice.actions;

export default boardSlice.reducer;

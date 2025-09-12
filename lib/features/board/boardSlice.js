const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  boardId: "",
  formOpen: false,
  isLoading: true,
  activeTask: { name: "", description: "", icon: "", status: "" },
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
  },
});

export const { toggleForm, toggleLoading, setBoardId, setActiveTask } =
  boardSlice.actions;

export default boardSlice.reducer;

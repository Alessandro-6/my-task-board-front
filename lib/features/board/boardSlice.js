const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  boardId: "",
  formOpen: false,
  isLoading: true,
  activeTask: null,
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
  boardSlice;

export default boardSlice.reducer;

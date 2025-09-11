const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  boardId: "",
  formOpen: false,
  isLoading: true,
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
  },
});

export const { toggleForm, toggleLoading, setBoardId } = boardSlice;

export default boardSlice;

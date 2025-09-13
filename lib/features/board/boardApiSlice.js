const { API_URL } = require("@/lib/constants");
const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query/react");

const boardApiSlice = createApi({
  reducerPath: "boards",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => {
    return {
      getBoard: builder.query({
        query: (boardId) => `/boards/${boardId}`,
      }),
      postBoard: builder.mutation({
        query: (board) => ({ url: "/boards", method: "POST", body: board }),
      }),
      putBoard: builder.mutation({
        query: (board) => ({
          url: `/boards/${board._id}`,
          method: "PUT",
          body: board,
        }),
      }),
      deleteBoard: builder.mutation({
        query: (boardId) => ({ url: `/boards/${boardId}`, method: "DELETE" }),
      }),
    };
  },
});

export const {
  useGetBoardQuery,
  usePostBoardMutation,
  usePutBoardMutation,
  useDeleteBoardMutation,
} = boardApiSlice;

export default boardApiSlice;

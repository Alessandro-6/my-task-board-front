const { API_URL } = require("@/lib/constants");
const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query");

const boardApiSlice = createApi({
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
        query: (board) => ({ url: "/boards", method: "PUT", body: board }),
      }),
      deleteBoard: builder.mutation({
        query: (boardId) => ({ url: `/boards/${boardId}`, method: "DELETE" }),
      }),
    };
  },
});

export const {
  useGetBoardQuery,
  usePostBoardQuery,
  usePutBoardQuery,
  useDeleteBoardQuery,
} = boardApiSlice;

export default boardApiSlice;

import { API_URL } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const taskApiSlice = createApi({
  reducerPath: "tasks",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => {
    return {
      putTask: builder.mutation({
        query: (taskId, task) => ({
          url: `/tasks/${taskId}`,
          method: "PUT",
          body: task,
        }),
      }),
      deleteTask: builder.mutation({
        query: (taskId) => ({
          url: `/tasks/${taskId}`,
          method: "DELETE",
        }),
      }),
    };
  },
});

export const { usePutTaskQuery, useDeleteTaskQuery } = taskApiSlice;

export default taskApiSlice;

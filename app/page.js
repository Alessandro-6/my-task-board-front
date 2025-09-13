"use client";
import Header from "./components/Header";
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import {
  useGetBoardQuery,
  usePostBoardMutation,
} from "@/lib/features/board/boardApiSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBoardId } from "@/lib/features/board/boardSlice";
import TaskLoader from "./components/TaskLoader";

// const tasks = [
//   {
//     name: "Task in Progress",
//     description: "",
//     icon: "⏰",
//     status: "in-progress",
//   },
//   {
//     name: "Task Completed",
//     description: "",
//     icon: "🏋️‍♂️",
//     status: "completed",
//   },
//   {
//     name: "Task Won’t Do",
//     description: "",
//     icon: "☕",
//     status: "won't-do",
//   },
//   {
//     name: "Task To Do",
//     description: "Work on a Challenge on devChallenges.io, learn TypeScript.",
//     icon: "📚",
//     status: "todo",
//   },
// ];

export default function Home() {
  const { boardId } = useSelector((state) => state.board);
  const [postBoardMutation, { data, isCreating }] = usePostBoardMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const boardId = localStorage.getItem("boardId");

    if (!boardId) {
      postBoardMutation();
      localStorage.setItem("boardId", boardId);
      dispatch(setBoardId(data));
    }
  }, [postBoardMutation, dispatch, data]);

  const { data: board, isLoading } = useGetBoardQuery(boardId);

  return (
    <main className="mx-auto grid grid-rows-[20px_1fr_20px] items-center min-h-screen max-w-2xl p-8 pb-20 gap-16 sm:p-20">
      <Header board={board} />
      <Tasks>
        {/* {isLoading || isCreating ? (
          <TaskLoader />
        ) : (
          board.tasks.map((task, idx) => (
            <Task
              name={task.name}
              icon={task.icon}
              key={idx}
              status={task.status}
              description={task.description}
            />
          ))
        )} */}
      </Tasks>
    </main>
  );
}

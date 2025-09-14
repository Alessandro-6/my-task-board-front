"use client";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskLoader from "./components/TaskLoader";
import { Suspense, useEffect } from "react";
import { getBoard } from "@/lib/api/boardApi";
import { useDispatch, useSelector } from "react-redux";
import { setBoardId } from "@/lib/features/board/boardSlice";

export default function Home() {
  const { boardId } = useSelector((state) => state.board);
  const dispatch = useDispatch();

  useEffect(() => {
    const boardId = localStorage?.getItem("boardId");

    dispatch(setBoardId(boardId));
  }, [dispatch]);

  const boardPromise = getBoard(boardId);

  return (
    <main className="mx-auto grid grid-rows-[20px_1fr_20px] items-center min-h-screen max-w-2xl p-8 pb-20 gap-16 sm:p-20">
      <Suspense fallback={<p>Loading...</p>}>
        <Header boardPromise={boardPromise} />
      </Suspense>
      <Suspense
        fallback={
          <div className="self-start overflow-y-scroll">
            <TaskLoader />
            <TaskLoader />
            <TaskLoader />
          </div>
        }
      >
        <Tasks boardPromise={boardPromise} />
      </Suspense>
    </main>
  );
}

import Image from "next/image";
import Task from "./Task";
import { use, useState } from "react";
import { updateTask } from "@/lib/api/taskApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "@/lib/features/board/boardSlice";

export default function Tasks({ boardPromise }) {
  const { boardId } = useSelector((state) => state.board);
  const board = use(boardPromise);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddTask = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateTask(boardId, { boardId });
    } catch (err) {
    } finally {
      setIsLoading(false);
      dispatch(toggleLoading());
    }
  };

  return (
    <div className="self-start overflow-y-scroll">
      {board?.tasks?.map((task, idx) => (
        <Task
          name={task.name}
          icon={task.icon}
          id={task._id}
          key={idx}
          status={task.status}
          description={task.description}
        />
      ))}
      <form
        className={`p-3 cursor-pointer rounded-xl flex items-center bg-root-100 mb-5`}
      >
        <button
          type="submit"
          className={`flex cursor-pointer items-center rounded-lg justify-center h-10 w-10 mr-5 bg-root-400`}
          onClick={handleAddTask}
        >
          <Image
            src="/Add_round_duotone.svg"
            alt="time"
            width={20}
            height={20}
          />
        </button>
        <span className="inline-block font-medium">
          {isLoading ? "Adding..." : "Add new task"}
        </span>
      </form>
    </div>
  );
}

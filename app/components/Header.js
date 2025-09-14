import { updateBoard } from "@/lib/api/boardApi";
import { toggleLoading } from "@/lib/features/board/boardSlice";
import Image from "next/image";
import { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header({ boardPromise }) {
  const board = use(boardPromise);
  const [title, setTitle] = useState(board?.name || "My Task Board");
  const [desc, setDesc] = useState(board?.desc || "Tasks to keep organised");
  const [isUpdating, setIsUpdating] = useState(false);
  const { boardId } = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      await updateBoard(boardId, { name: title, description: desc });
    } catch (err) {
    } finally {
      dispatch(toggleLoading());
      setIsUpdating(false);
    }
  };

  return (
    <form>
      <div className="flex gap-2.5 mb-2">
        <Image src="/Logo.svg" alt="logo" width={40} height={40} />
        <input
          id="edit"
          type="text"
          className="text-4xl w-3xs outline-0"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" onClick={handleUpdate}>
          <Image src="/Edit_duotone.svg" alt="Edit" width={30} height={30} />
        </button>
      </div>
      <input
        type="text"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        className="ml-13 outline-0 font-medium text-sm"
      />
    </form>
  );
}

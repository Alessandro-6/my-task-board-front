"use client";

import { toggleForm } from "@/lib/features/board/boardSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FormComponent({ label, id, children }) {
  return (
    <div className="mb-4">
      <label
        className="flex flex-col mb-2 text-grey-200 text-sm font-medium"
        htmlFor={id}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function StatusIcon({ src, alt, className }) {
  return (
    <span
      type="button"
      className={`${className} flex cursor-pointer items-center rounded-xl justify-center h-10 w-10 mr-5`}
    >
      <Image src={src} alt={alt} width={20} height={20} />
    </span>
  );
}

export default function TaskForm() {
  const baseClass =
    "border-2 border-grey-50 w-full px-4 rounded-md transition outline-2 outline-transparent focus:outline-2 focus:outline-blue ";

  const statusClass =
    "flex border-2 transition items-center cursor-pointer pl-1 col-span-6 h-13 rounded-2xl";

  const icons = ["👨‍💻", "💬", "☕", "🏋️‍♂️", "📚", "⏰"];
  const statuses = [
    {
      title: "in-progress",
      img: "/Time_atack_duotone.svg",
      start: "col-start-1",
      bg: "bg-root-400",
    },
    {
      title: "completed",
      img: "/Done_round_duotone.svg",
      start: "col-start-7",
      bg: "bg-lett-100",
    },
    {
      title: "won't do",
      img: "/close_ring_duotone.svg",
      start: "col-start-1",
      bg: "bg-red",
    },
  ];
  const task = useSelector((state) => state.board.activeTask);
  const { formOpen } = useSelector((state) => state.board);
  const [active, setActive] = useState(-1);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setActive(icons.findIndex((icon) => icon === task.icon));
    setSelectedStatus(task.status || "");
    setTaskName(task.name || "");
    setTaskDesc(task.description || "");
  }, [task.name, task.icon, task.description, task.status, icons]);

  if (!formOpen) return;

  return (
    <>
      <div
        className="fixed h-screen brightness-75 opacity-20 bg-slate-950 z-10 w-screen"
        onClick={() => dispatch(toggleForm())}
      ></div>
      <form
        className="font-sans overflow-scroll font-medium fixed right-0 md:right-3 rounded-xl p-5 top-1/2 -translate-y-1/2 bg-white h-[97%] w-screen md:w-2xl z-20"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-full flex mb-3 center justify-between">
          <h3 className="text-xl">Task details</h3>
          <span
            className="border active:brightness-75 transition border-grey-50 h-9 w-9 rounded-md -translate-y-1 flex items-center justify-center cursor-pointer"
            onClick={() => dispatch(toggleForm())}
          >
            <Image
              src="/close_ring_duotone-1.svg"
              alt="times"
              width={20}
              height={20}
            />
          </span>
        </div>
        <FormComponent label="Task name" id="name">
          <input
            type="text"
            name="name"
            id="name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className={`${baseClass} h-11`}
          />
        </FormComponent>
        <FormComponent label="Description" id="desc">
          <textarea
            type="text"
            name="name"
            id="desc"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            className={`${baseClass} h-40 pt-2 placeholder:text-grey-200`}
            placeholder="Enter a short description"
          ></textarea>
        </FormComponent>
        <FormComponent label="Icon" className="flex flex-row">
          <ul className="flex gap-4">
            {icons.map((icon, idx) => (
              <li
                className={`${
                  active === idx ? "bg-root-300" : "bg-grey-50"
                } text-lg rounded-lg h-10.5 w-10.5 transition flex items-center justify-center cursor-pointer hover:brightness-95`}
                key={idx}
                onClick={() => setActive(idx)}
              >
                {icon}
              </li>
            ))}
          </ul>
        </FormComponent>
        <FormComponent label="Status">
          <ul className="grid grid-cols-12 gap-5 auto-rows-fr">
            {statuses.map((status, idx) => (
              <li
                className={`${statusClass} ${
                  selectedStatus === status.title
                    ? "border-blue"
                    : "border-grey-50 "
                } ${status.start} pr-3 capitalize`}
                key={idx}
                onClick={() => setSelectedStatus(status.title)}
              >
                <StatusIcon
                  src={status.img}
                  className={status.bg}
                  alt={status.title}
                />
                <span className={`inline-block mr-auto`}>
                  {status?.title?.split("-").join(" ")}
                </span>
                <span
                  className={`h-5 w-5 flex items-center justify-center ${
                    selectedStatus === status.title && "bg-blue rounded-full"
                  }`}
                >
                  {selectedStatus === status.title && (
                    <Image
                      src="/Done_round.svg"
                      alt="checked"
                      height={14}
                      width={14}
                    />
                  )}
                  <input
                    onChange={(e) => {
                      e.target.checked && setSelected(status.title);
                    }}
                    type="checkbox"
                    checked={selectedStatus === status.title}
                    className="cursor-pointer hidden"
                  />
                </span>
              </li>
            ))}
          </ul>
        </FormComponent>
        <div className="flex h-[16%] items-end justify-end text-white">
          <button
            type="submit"
            className="h-8 w-28 mr-4 flex gap-2 items-center transition active:brightness-90 justify-center text-sm  rounded-full bg-grey-200"
          >
            <span>Delete</span>
            <Image src="/Trash.svg" alt="trash can" width={20} height={20} />
          </button>
          <button
            type="submit"
            className="h-8 w-28 py-1 text-sm gap-2 flex items-center transition active:brightness-90 justify-center rounded-full bg-blue"
          >
            <span>Save</span>
            <Image src="/Done_round.svg" alt="checked" width={18} height={18} />
          </button>
        </div>
      </form>
    </>
  );
}

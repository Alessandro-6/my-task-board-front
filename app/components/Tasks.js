"use client";

import Image from "next/image";

export default function Tasks({ children }) {
  return (
    <div className="self-start overflow-y-scroll">
      {children}
      <div
        className={`p-3 cursor-pointer rounded-xl active:brightness-95 transition flex items-center bg-root-100 mb-5`}
      >
        <button
          type="button"
          className={`flex cursor-pointer items-center rounded-lg justify-center h-10 w-10 mr-5 bg-root-400`}
        >
          <Image
            src="/Add_round_duotone.svg"
            alt="time"
            width={20}
            height={20}
          />
        </button>
        <span className="inline-block font-bold">Add new task</span>
      </div>
    </div>
  );
}

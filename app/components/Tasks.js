"use client";

export default function Tasks({ children }) {
  return (
    <div className="self-start">
      {children}
      <div>Add new task</div>
    </div>
  );
}

import Image from "next/image";

export default function Task({ name, description, status, icon }) {
  const baseClass = "flex items-center rounded-lg justify-center h-10 w-10";

  return (
    <div
      className={`p-3 active:brightness-95 font-medium rounded-xl cursor-pointer flex items-center  transition ${
        status === "won't-do"
          ? "bg-root-200"
          : status === "completed"
          ? "bg-lett-50"
          : status === "in-progress"
          ? "bg-root-300"
          : "bg-grey-50"
      } mb-5`}
    >
      <span className={`${baseClass} self-start text-xl mr-5 bg-root-50`}>
        {icon}
      </span>
      <div className="inline-block mr-auto text-lg">
        <span>{name}</span>
        <p className="text-sm font-normal w-3/4">{description}</p>
      </div>
      {status !== "todo" && (
        <span
          className={`${baseClass} ${
            status === "won't-do"
              ? "bg-red"
              : status === "completed"
              ? "bg-lett-100"
              : status === "in-progress"
              ? "bg-root-400"
              : ""
          }`}
        >
          <Image
            src={
              status === "won't-do"
                ? "/close_ring_duotone.svg"
                : status === "completed"
                ? "/Done_round_duotone.svg"
                : status === "in-progress"
                ? "/Time_atack_duotone.svg"
                : ""
            }
            alt={
              status === "won't-do"
                ? "times"
                : status === "completed"
                ? "checked"
                : status === "in-progress"
                ? "timer"
                : ""
            }
            width={20}
            height={20}
          />
        </span>
      )}
    </div>
  );
}

import Image from "next/image";

export default function Task({ name, description, status, icon }) {
  const baseClass = "flex items-center rounded-xl justify-center h-10 w-10";

  return (
    <div className={`p-3 rounded-[18px] flex items-center bg-root-300 mb-5`}>
      <span className={`${baseClass} text-xl mr-5 bg-root-50`}>{icon}</span>
      <span className="inline-block mr-auto text-lg font-semibold">{name}</span>
      <span className={`${baseClass} bg-root-400`}>
        <Image
          src="/Time_atack_duotone.svg"
          alt="time"
          width={22}
          height={22}
        />
      </span>
    </div>
  );
}

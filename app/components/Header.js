import Image from "next/image";

export default function Header({ board }) {
  return (
    <div>
      <div className="flex gap-2.5 mb-2">
        <Image src="/Logo.svg" alt="logo" width={40} height={40} />
        <h1 className="text-4xl">{board?.name || "My Task Board"}</h1>
        <Image src="/Edit_duotone.svg" alt="Edit" width={30} height={30} />
      </div>
      <p className="ml-13 font-medium text-sm">Tasks to keep organised</p>
    </div>
  );
}

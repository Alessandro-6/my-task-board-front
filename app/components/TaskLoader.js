import { Skeleton } from "@/components/ui/skeleton";

export default function TaskLoader() {
  return (
    <div className="flex flex-col space-y-3 mb-5">
      <Skeleton className="h-14 w-full rounded-xl bg-slate-300" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-10/12 bg-slate-300" />
      </div>
    </div>
  );
}

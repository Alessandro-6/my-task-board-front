import Header from "./components/Header";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";

const tasks = [
  {
    name: "Task in Progress",
    description: "",
    icon: "⏰",
    status: "in-progress",
  },
  {
    name: "Task Completed",
    description: "",
    icon: "🏋️‍♂️",
    status: "completed",
  },
  {
    name: "Task Won’t Do",
    description: "",
    icon: "☕",
    status: "won't-do",
  },
  {
    name: "Task To Do",
    description: "Work on a Challenge on devChallenges.io, learn TypeScript.",
    icon: "📚",
    status: "todo",
  },
];

export default function Home() {
  return (
    <main className="mx-auto grid grid-rows-[20px_1fr_20px] items-center min-h-screen max-w-2xl p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <Tasks>
        {tasks.map((task, idx) => (
          <Task
            name={task.name}
            icon={task.icon}
            key={idx}
            status={task.status}
            description={task.description}
          />
        ))}
      </Tasks>
    </main>
  );
}

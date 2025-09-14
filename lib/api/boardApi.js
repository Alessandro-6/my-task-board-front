import axios from "axios";

const { API_URL } = require("../constants");

// if (!boardId) {
//   const postRes = await axios.post(`${API_URL}/boards`, {
//     name: "My Task Board",
//     description: "Tasks to keep organised",
//     tasks,
//   });

//   const postData = await postRes.json();

//   const res = await axios.get(`${API_URL}/boards/${boardId}`);
//   const data = await res.json();

//   return data;
// }

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

export async function getBoard(boardId) {
  try {
    if (!boardId) return Promise.resolve();
    const {
      data: { data },
    } = await axios.get(`${API_URL}/boards/${boardId}`);

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function updateBoard(boardId, payload) {
  try {
    const {
      data: { data },
    } = await axios.put(`${API_URL}/boards/${boardId}`, payload);

    return data;
  } catch (err) {
    console.log(err);
  }
}

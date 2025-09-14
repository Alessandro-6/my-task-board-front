import axios from "axios";
import { API_URL } from "../constants";

export async function deleteTask(taskId) {
  try {
    if (!taskId) return Promise.resolve();
    const {
      data: { data },
    } = await axios.delete(`${API_URL}/tasks/${taskId}`);

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function updateTask(taskId, payload) {
  try {
    console.log(taskId);

    const {
      data: { data },
    } = await axios.put(`${API_URL}/tasks/${taskId}`, payload);

    return data;
  } catch (err) {
    console.log(err);
  }
}

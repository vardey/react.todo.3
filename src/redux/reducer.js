import {
  ADD_TASK,
  DELETE_ALL_COMPLETED_TASKS,
  UPDATE_TASK,
  DELETE_TASK_BY_ID,
} from "./actionConst";
import { getTasksListFromLocalStorage } from "../localStorageHandlers";
import * as reducerHandler from "./reducerHandler";

export const todoReducer = (data = getTasksListFromLocalStorage(), action) => {
    console.log(data);
  switch (action.type) {
    case ADD_TASK:
      return reducerHandler.addTask( action.data, data);
    case DELETE_ALL_COMPLETED_TASKS:
      return reducerHandler.deleteAllCompletedTasks(data);
    case UPDATE_TASK:
      return reducerHandler.updateTask(action.data, data);
    case DELETE_TASK_BY_ID:
      return reducerHandler.deleteTaskById(action.data, data);
    default:
      return data;
  }
};

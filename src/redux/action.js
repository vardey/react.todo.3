import {
  ADD_TASK,
  DELETE_ALL_COMPLETED_TASKS,
  UPDATE_TASK,
  OPEN_TAB,
  DELETE_TASK_BY_ID,
} from "./actionConst";

export const addTask = (task) => {
    console.log("action add task", task);
  return {
    type: ADD_TASK,
    data: task,
  };
};

export const deleteAllCompletedTasks = () => {
  return {
    type: DELETE_ALL_COMPLETED_TASKS,
    data: {},
  };
};
export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    data: task,
  };
};

export const openTab = async (tabName) => {
  return {
    type: OPEN_TAB,
    data: tabName,
  };
};

export const deleteTaskById = (id) => {
  return {
    type: DELETE_TASK_BY_ID,
    data: id,
  };
};

import { ACTIONS } from "../const";
import * as localStorageService from "../localStorageHandlers";

export const addTask = (task, tasksList) => {
  console.log({task, tasksList})
  const newTaskList = [...tasksList, task];
  localStorageService.updateLocalStorageTasksList(task, ACTIONS.ADD_ONE);
  return newTaskList;
};

export const deleteTaskById = (id, tasksList) => {
  const index = localStorageService.getTaskIndexById(id, tasksList);
  const newTasksList = [...tasksList];
  newTasksList.splice(index, 1);
  localStorageService.updateLocalStorageTasksList({ id }, ACTIONS.DELETE_ONE);
  return newTasksList;
};

export const deleteAllCompletedTasks = (tasksList) => {
  const newTasksList = tasksList.filter((task) => !task.isCompleted);

  localStorageService.updateLocalStorageTasksList(
    newTasksList,
    ACTIONS.UPDATE_MANY
  );
  return newTasksList;
};

export const updateTask = (task, tasksList) => {
  const index = localStorageService.getTaskIndexById(task.id, tasksList);
  const newTasksList = [...tasksList];
  newTasksList[index] = task;
  localStorageService.updateLocalStorageTasksList(task, ACTIONS.UPDATE_ONE);
  return newTasksList;
};

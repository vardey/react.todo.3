import Header from "./Header";
import Tabs from "./Tabs";
import "./TabContainer.css";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import { useState } from "react";
import { ACTIONS, TABS } from "../const";

const TabContainer = (props) => {
  const {
    getTasksListFromLocalStorage,
    updateLocalStorageTasksList,
    getTaskIndexById,
  } = props;
  const [tasksList, setTasksList] = useState(
    getTasksListFromLocalStorage() || []
  );
  const [currentTab, setCurrentTab] = useState(TABS.ALL);
  const [isAddTaskVisible, setIsTaskVisible] = useState((currentTab !== TABS.COMPLETED))

  const addTask = (task) => {
    const newTaskList = [...tasksList, task];
    setTasksList(newTaskList);
    updateLocalStorageTasksList(task, ACTIONS.ADD_ONE);
  };

  const deleteTaskById = (id) => {
    const index = getTaskIndexById(id, tasksList);
    const newTasksList = [...tasksList];
    newTasksList.splice(index, 1);
    setTasksList(newTasksList);
    updateLocalStorageTasksList({ id }, ACTIONS.DELETE_ONE);
  };

  const deleteAllCompletedTasks = () => {
    const newTasksList = tasksList.filter((task)=> !task.isCompleted);
    setTasksList(newTasksList);
    updateLocalStorageTasksList(newTasksList, ACTIONS.UPDATE_MANY);
  };

  const updateTask = (task) => {
    const index = getTaskIndexById(task.id, tasksList);
    const newTasksList = [...tasksList];
    newTasksList[index] = task;
    setTasksList(newTasksList);
    updateLocalStorageTasksList(task, ACTIONS.UPDATE_ONE);
  };

  const openTab = async (tabName) => {
    console.log(tabName);
    setCurrentTab(tabName);
    if (tabName ===TABS.COMPLETED) {
      setIsTaskVisible(false);
    }else{
      setIsTaskVisible(true);
    }
  };

  return (
    <div className="tabContainer">
      <Header />
      <Tabs currentTab={currentTab} openTab={openTab} />
      <AddTask addTask={addTask} isAddTaskVisible={isAddTaskVisible} />
      <TasksList
        currentTab={currentTab}
        deleteTaskById={deleteTaskById}
        tasksList={tasksList}
        updateTask={updateTask}
        deleteAllCompletedTasks={deleteAllCompletedTasks}
      />
    </div>
  );
};

export default TabContainer;

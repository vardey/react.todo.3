// import './App.css';

import TabContainer from "./components/TabContainer";
import { ACTIONS } from "../src/const";

function App() {
  const getTasksListFromLocalStorage = () => {
    try {
      const tasks = JSON.parse(localStorage.getItem("allTasks")) || [];
      return tasks;
    } catch (e) {
      return [];
    }
  };

  const getTaskIndexById = (id, allTasks) => {
    for (let i = 0; i < allTasks.length; i++) {
      if (id === allTasks[i].id) {
        return i;
      }
    }
  };

  const updateLocalStorageTasksList = (task, action) => {
    let allTasks = getTasksListFromLocalStorage();

    switch (action) {
      case ACTIONS.ADD_ONE:
        allTasks.push(task);
        break;
      case ACTIONS.UPDATE_MANY:
        allTasks = task;
        break;
      case ACTIONS.DELETE_ONE: {
        const index = getTaskIndexById(task.id, allTasks);
        allTasks.splice(index, 1);
        break;
      }
      case ACTIONS.UPDATE_ONE: {
        const index = getTaskIndexById(task.id, allTasks);
        allTasks[index] = task;
        break;
      }
      default:
        break;
    }
    localStorage.setItem("allTasks",JSON.stringify(allTasks));
  };

  return (
    <>
      <TabContainer
        getTasksListFromLocalStorage={getTasksListFromLocalStorage}
        updateLocalStorageTasksList={updateLocalStorageTasksList}
        getTaskIndexById={getTaskIndexById}
      />
    </>
  );
}

export default App;

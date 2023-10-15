import Header from "./Header";
import Tabs from "./Tabs";
import "./TabContainer.css";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import { useState } from "react";
import { TABS } from "../const";

const TabContainer = (props) => {

  const [currentTab, setCurrentTab] = useState(TABS.ALL);
  const [isAddTaskVisible, setIsTaskVisible] = useState((currentTab !== TABS.COMPLETED))

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
      <AddTask isAddTaskVisible={isAddTaskVisible} />
      <TasksList
        currentTab={currentTab}
      />
    </div>
  );
};

export default TabContainer;

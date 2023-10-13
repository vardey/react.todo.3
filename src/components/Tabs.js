import TabButton from "./TabButton";
import { TABS } from "../const";
const Tabs = (props) => {
  const { openTab, currentTab } = props;
  return (
    <div className="tab">
      <TabButton
        className={
          currentTab === TABS.ALL ? "allTab currentActiveButton" : "allTab"
        }
        id="defaultOpen"
        openTab={() => openTab(TABS.ALL)}
        tabContent="All"
        style = {{borderBottom : currentTab !== TABS.ALL && "none" }}
      />
      <TabButton
        className={
          currentTab === TABS.ACTIVE
            ? "activeTab currentActiveButton"
            : "activeTab"
        }
        openTab={() => openTab(TABS.ACTIVE)}
        tabContent="Active"
        style = {{borderBottom : currentTab !== TABS.ACTIVE && "none" }}
      />
      <TabButton
        className={
          currentTab === TABS.COMPLETED
            ? "Completed currentActiveButton"
            : "Completed"
        }
        openTab={() => openTab(TABS.COMPLETED)}
        tabContent="Completed"
        style = {{borderBottom : currentTab !== TABS.COMPLETED && "none" }}
      />
    </div>
  );
};

export default Tabs;

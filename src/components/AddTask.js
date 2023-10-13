import { useState } from "react";

const AddTask = (props) => {
  const [taskContent, setTaskContent] = useState("");
  const { isAddTaskVisible } = props;

  const captureTaskContent = (e) => {
    console.log(e.target.value);
    setTaskContent(e.target.value);
  };

  return (
    isAddTaskVisible && (
      <div className="textInput">
        <input
          type="text"
          id="addTaskInput"
          value={taskContent}
          required={true}
          onChange={captureTaskContent}
          placeholder="add details"
        />
        <button
          onClick={() => {
            if (!taskContent) {
              alert("Please enter a task!");
              return;
            }
            props.addTask({
              id: Date.now(),
              content: taskContent,
              isCompleted: false,
            });
            setTaskContent("");
          }}
        >
          Add
        </button>
      </div>
    )
  );
};

export default AddTask;

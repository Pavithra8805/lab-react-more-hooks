import React from "react";
import "./Todo.css";

const Task = (props) => {
    const { task, index, dispatch } = props;
    const { text, isHidden } = task;

    return (
        <div className="task-container">
            {isHidden ? <h3>This content is hidden</h3>:
            <h3>Task:{text}</h3>}
            <button className="toggle-btn"
                onClick={() =>
                    dispatch({type: "TOGGLE_TEXT",
                    payload: index })
                }
            >   
                Toggle
            </button>
        </div>
    );
};

export default Task;


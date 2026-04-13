import { useState } from "react";
import { useTask, type Task } from "../context/TaskProvider";

export default function Dashboard() {
    const { tasks, addTask, deleteTask } = useTask();
    const [taskInput, setTaskInput] = useState<Partial<Task>>({
        title: "",
        description: "",
        completed: false,
    });
    function handleTaskInput(name: keyof Task, value: string | boolean) {
        setTaskInput((prev) => ({ ...prev, [name]: value }));
    }
    function handleAddTask() {
        if (!taskInput["title"] || !taskInput["description"]) {
            alert("Please fill all fields");
            return;
        }
        const { title, description } = taskInput;
        addTask({
            id: crypto.randomUUID(),
            title,
            description,
            completed: false,
        });
    }

    return (
        <>
            <h1>Add Task</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={taskInput["title"]}
                        onChange={(e) => handleTaskInput("title", e.target.value)}
                        placeholder="Title"
                    />
                </div>
                <div>
                    <textarea
                        name="description"
                        id="description"
                        value={taskInput["description"]}
                        onChange={(e) => handleTaskInput("description", e.target.value)}
                        placeholder="Description"
                    />
                </div>
                <span>
                    <button
                        onClick={() => {
                            handleAddTask();
                            handleTaskInput("title", "");
                            handleTaskInput("description", "");
                        }}>
                        Add Task
                    </button>
                </span>
            </div>

            <div>
                {tasks.map(({ id, title, description, completed }) => {
                    return (
                        <div
                            key={id}
                            onClick={(e) => {
                                if (e.target.tagName === "DIV") {
                                    
                                }
                            }}>
                            <div>
                                <div>Title:{title}</div>
                                <div>Description:{description}</div>
                            </div>
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                onChange={(e) => {
                                    handleTaskInput("completed", e.target.checked);
                                }}
                            />
                            <button onClick={() => deleteTask(id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

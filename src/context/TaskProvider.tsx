import { createContext, useContext, useState, type ReactNode } from "react";
export type Task = {
    id: string;
    title: string;
    description: string;
    subtask?: string[];
    completed: boolean;
};

export type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (id: string) => void;
};
export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export default function TaskProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([]);
    function addTask(task: Task) {
        setTasks((prev) => [...prev, task]);
    }
    function deleteTask(id: string) {
        setTasks((prev) => prev.filter(({ id: tid }) => tid !== id));
    }
    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
}
export function useTask() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("Error");
    }
    return context;
}

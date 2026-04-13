import  { Navigate, useParams } from "react-router-dom"
import { useTask } from "../context/TaskProvider"

export default function TaskDetails(){
    const {tasks} = useTask()
    const {id} = useParams() 
    const task = tasks.find(({id:tid}) => tid === id);
    if(!task){
        return <Navigate to={"/"} replace/> 
    }   
    return <>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>Status:{}</p>
    </>
}
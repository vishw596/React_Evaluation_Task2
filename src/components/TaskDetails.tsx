import  { useParams } from "react-router-dom"
import { useTask } from "../context/TaskProvider"

export default function TaskDetails(){
    const {tasks} = useTask()
    const {id} = useParams()    
    return <>
        {id}
    </>
}
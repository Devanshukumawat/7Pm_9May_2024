import { useState } from "react";
import TodoCss from "./style.module.css"

function Todo() {

    const Task = [
        {taskName:"Buy Bike",complete:true},
        {taskName:"Buy Car",complete:false}
    ]
    const [ task, setTask ] = useState("")
    const [allTask,setAllTask] = useState(Task)

    

    function handleForm(e){
        e.preventDefault()
        console.log({Task:task})

        if(task){
            setAllTask([...allTask,{taskName:task,complete:false}])
        }else{
            console.log("Please Add Task")
        }

        

    }

    function handleTask(e){
        setTask(e.target.value)
    }

    function handleCheck(key){
        const copyOfArray = [...allTask]
        copyOfArray[key].complete =! copyOfArray[key].complete
        setAllTask(copyOfArray)
    }

    return ( 
        <>
            <div className={TodoCss.main}>
                <div className={TodoCss.todo}>
                <h1>My Todo App 😍</h1>
                <form onSubmit={handleForm}>
                    <input type="text" className="form-control"
                        placeholder="Add Task Here..."
                        value={task}
                        onChange={handleTask}
                    />
                    <button className="form-control btn-success mt-3 mb-3">Add Task</button>
                    {
                        allTask.map((value,index)=>(
                            <ul key={index}>
                              <input type="checkbox" className="me-3"
                                checked={value.complete}
                                onClick={()=>{handleCheck(index)}}
                               />
                                <span
                                style={{textDecoration:value.complete?"line-through":""}}
                                >{value.taskName}</span><i className="bi bi-pencil-square float-end ms-3"></i><i className="bi bi-trash3 float-end"></i>
                            </ul>
                        ))
                    }
                    </form>
                </div>
            </div>
        </>
     );
}

export default Todo;
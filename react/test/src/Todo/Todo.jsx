import { useEffect, useState } from "react";
import TodoCss from "./style.module.css";

function Todo() {
  const Task = [
    { taskName: "Buy Bike", complete: true },
    { taskName: "Buy Car", complete: false },
  ];
  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState(Task);
  const [complete,setComplete] = useState(0)
  const [remaining,setRemaining] = useState(0)
  const [totalTask,setTotalTask] = useState(0)

  function handleForm(e) {
    e.preventDefault();
    console.log({ Task: task });

    if (task) {
      setAllTask([...allTask, { taskName: task, complete: false }]);
      setTask("");
    } else {
      console.log("Please Add Task");
    }
  }

  function handleTask(e) {
    setTask(e.target.value);
  }

  function handleCheck(key) {
    const copyOfArray = [...allTask];
    copyOfArray[key].complete = !copyOfArray[key].complete;
    setAllTask(copyOfArray);

    


  }

  function handleDelete(id) {
    const arrayOfDelete = [...allTask];
    const deletedItem = arrayOfDelete.filter((value, index) => {
      return index !== id;
    });

    setAllTask(deletedItem);
  }

  function handleUpdate(id) {
    const updateArray = [...allTask];
    const updateValue = updateArray[id].taskName;
    let newValue = prompt(`Update Your Task :- ${updateValue}`, updateValue);

    if (newValue) {
      let newObj = { taskName: newValue, complete: false };

      updateArray.splice(id, 1, newObj);

      setAllTask(updateArray);
    }
  }

  useEffect(()=>{

    const copyOfArray = [...allTask];

    const CompletedTasks = copyOfArray.filter((value,index)=>{
        return value.complete
    })

    setComplete(CompletedTasks.length)

    const RemaingTasks = copyOfArray.filter((value,index)=>{
       return ! value.complete
    })

    setRemaining(RemaingTasks.length)

    const totalTasks = copyOfArray.filter((value,index)=>{
        return value
    })

    setTotalTask(totalTasks.length)
  },[allTask])

  return (
    <>
    <h4 className="text-center">Total Task :- {totalTask} </h4>
      <div className={TodoCss.main}>
        <div className={TodoCss.todo}>
          <h1>My Todo App 😍</h1>
          <form onSubmit={handleForm}>
            <input
              type="text"
              className="form-control"
              placeholder="Add Task Here..."
              value={task}
              onChange={handleTask}
            />
            <button className="form-control btn-success mt-3 mb-3">
              Add Task
            </button>
            {allTask.map((value, index) => (
              <ul key={index}>
                <input
                  type="checkbox"
                  className="me-3"
                  checked={value.complete}
                  onClick={() => {
                    handleCheck(index);
                  }}
                />
                <span
                  style={{
                    textDecoration: value.complete ? "line-through" : "",
                  }}
                >
                  {value.taskName}
                </span>
                <i
                  className="bi bi-pencil-square float-end ms-3 text-success"
                  onClick={() => {
                    handleUpdate(index);
                  }}
                ></i>
                <i
                  className="bi bi-trash3 float-end text-danger"
                  onClick={() => {
                    handleDelete(index);
                  }}
                ></i>
              </ul>
            ))}
          </form>
          <h6>Completed Tasks :- {complete} </h6>
          <h6>Remaining Tasks :- {remaining} </h6>

        </div>
      </div>
    </>
  );
}

export default Todo;

import React, { useState, useContext } from "react";
import Header from "./Header";
import { AuthContext } from "../context/AuthProvider";

const CreateTaskList = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [tasktitle, setTaskTitle] = useState("");

  const [taskdescription, setTaskDescription] = useState("");
  const [taskdate, settaskDate] = useState("");
  const [taskcategory, setTaskCategory] = useState("");
  const [assignto, setAssignTo] = useState("");

  const [newTask, setNewTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      tasktitle,
      taskcategory,
      taskdescription,
      taskdate,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

   
    

    data.forEach(function (elem) {
      if (assignto == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask = elem.taskCount.newTask + 1;
      }
    });

    setUserData(data);

    // console.log(data);

    setAssignTo("");
    setTaskDescription("");
    setTaskTitle("");
    setTaskCategory("");
    settaskDate("");
  };

  return (
    <>
      <Header />
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="w-full h-1/2">
          <div className=" h-full mx-10 flex">
            <div className="w-1/2 h-full  flex flex-col justify-evenly pl-10">
              <div>
                <h3 className="text-lg font-semibold ">Task title</h3>
                <input
                  value={tasktitle}
                  onChange={(e) => {
                    setTaskTitle(e.target.value);
                  }}
                  type="text"
                  className="h-10 w-4/5 bg-transparent border-2 border-white rounded mt-2 pl-3"
                  placeholder="Make a new task"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mt-2">Date</h3>
                <input
                  value={taskdate}
                  onChange={(e) => {
                    settaskDate(e.target.value);
                  }}
                  type="date"
                  className="h-10 w-4/5 bg-transparent border-2 border-white rounded mt-2 pl-3 pr-3"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mt-2 ">Assign to</h3>
                <input
                  value={assignto}
                  onChange={(e) => {
                    setAssignTo(e.target.value);
                  }}
                  type="text"
                  className="h-10 w-4/5 bg-transparent border-2 border-white rounded mt-2 pl-3"
                  placeholder="Employee name"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mt-2 ">Category</h3>
                <input
                  value={taskcategory}
                  onChange={(e) => {
                    setTaskCategory(e.target.value);
                  }}
                  type="text"
                  className="h-10 w-4/5 bg-transparent border-2 border-white rounded mt-2 pl-3"
                  placeholder="Design,dev,UI,etc"
                />
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="ml-20  text-lg font-semibold ">Description</h3>
              <textarea
                value={taskdescription}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
                name=""
                id=""
                className="w-4/5 h-[63%] mt-2  ml-20 bg-transparent border-2 rounded p-3"
              ></textarea>
              <button className="ml-20 h-14 rounded-lg font-semibold text-lg bg-green-400 w-4/5 mt-4">
                Create Task
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateTaskList;

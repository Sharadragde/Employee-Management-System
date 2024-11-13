import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  
  
  return (
    <>
      <div
        id="tasklist"
        className=" h-80 mt-10 gap-5 px-10 flex flex-nowrap overflow-auto "
      >
        {data.tasks.map((elem,idx)=>{
          
          if (elem.newTask) {
            return <NewTask key={idx} data={elem} />
          
          }
              if (elem.active) {
                return <AcceptTask key={idx} data={elem} />;
              }
              if (elem.complted) {
                return <CompletedTask key={idx} data={elem} />;
          }
              if (elem.failed) {
                return <FailedTask key={idx} data={elem} />;
              }







        })}
      </div>
    </>
  );
};

export default TaskList;

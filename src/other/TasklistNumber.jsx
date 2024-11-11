import React from 'react'

const TasklistNumber = ({data}) => {
  return (
    <>
      <div className="h-40  flex items-center p-10 gap-5">
        <div className="bg-blue-400  w-[25%] h-28 p-5 rounded-lg">
          <h1 className="text-4xl font-semibold">{data.taskCount.newTask}</h1>
          <h4 className="text-xl mt-2 font-medium">New Task</h4>
        </div>
        <div className="bg-green-400  w-[25%] h-28 p-5 rounded-lg">
          <h1 className="text-4xl font-semibold">{data.taskCount.active}</h1>
          <h4 className="text-xl mt-2 font-medium">Active Task</h4>
        </div>
        <div className="bg-orange-400  w-[25%] h-28 p-5 rounded-lg">
          <h1 className="text-4xl font-semibold">{data.taskCount.completed}</h1>
          <h4 className="text-xl mt-2 font-medium">Completed Task</h4>
        </div>
        <div className="bg-yellow-400  w-[25%] h-28 p-5 rounded-lg">
          <h1 className="text-4xl font-semibold">{data.taskCount.failed}</h1>
          <h4 className="text-xl mt-2 font-medium">Failed Task</h4>
        </div>
      </div>
    </>
  );
}

export default TasklistNumber
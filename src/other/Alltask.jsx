import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Alltask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  // console.log(userData);

  return (
    <div id="alltask" className="h-40 mt-8 w-full  flex flex-col ">
      <div className="h-20 mx-20 ">
        <div className="h-10 mb-5 rounded-lg w-full bg-orange-500 flex justify-between px-5 items-center text-lg font-medium">
          <h2>Name</h2>
          <h2>NewTasks</h2>
          <h2> Accepted</h2>
          <h2>Completed</h2>
          <h2>Failed</h2>
        </div>
      </div>
      <div className=" w-full" id="tasks-all">
        {userData.map(function (elem,idx) {
          return (
            <div className="h-12 mx-20 mb-2" key={idx}>
              <div className="h-10 rounded-lg w-ful border-2 border-white flex justify-between px-5 items-center text-lg font-medium">
                <h2>{elem.firstName}</h2>
                <h2 className="text-orange-500">{elem.taskCount.newTask}</h2>
                <h2 className="text-orange-500">{elem.taskCount.active}</h2>
                <h2 className="text-orange-500">{elem.taskCount.completed}</h2>
                <h2 className="text-orange-500">{elem.taskCount.failed}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alltask;

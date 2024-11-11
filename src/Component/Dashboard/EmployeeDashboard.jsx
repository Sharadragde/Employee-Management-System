import React from "react";
import TaskList from "../Tasklist/TaskList";
import TasklistNumber from "../../other/TasklistNumber";
import Header from "../../other/Header";
function EmployeeDashboard(props) {
  return (
    <>
      <Header changeUser ={props.changeUser} data={props.data} />
      <TasklistNumber data={props.data} />
      <TaskList data={props.data} />
    </>
  );
}

export default EmployeeDashboard;

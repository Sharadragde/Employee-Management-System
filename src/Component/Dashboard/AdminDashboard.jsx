import React from 'react'
import CreateTaskList from '../../other/CreateTaskList';
import Alltask from '../../other/Alltask';
import Header from '../../other/Header';


const AdminDashboard = (props) => {
  return (
    <>
      <Header changeUser={props.changeUser} />
      <CreateTaskList />
      <Alltask  />
    </>
  );
}

export default AdminDashboard
import React, { useState } from "react";

const Header = (props) => {
  const logOutUser = () => {
    props.changeUser("");
  };

  return (
    <>
      <div className=" p-10 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-lg">Hello</h3>
          <span className="text-3xl font-semibold">
            {props.data.firstName}👋
          </span>
        </div> 
        <button
          onClick={logOutUser}
          className="text-lg bg-red-500 rounded-sm px-3 py-2 m font-semibold"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;

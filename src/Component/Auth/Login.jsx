import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="h-96 w-1/3 border-2 border-emerald-300 rounded-lg">
          <form
            className="h-full w-full flex flex-col items-center justify-center"
            onSubmit={submitHandler}
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              placeholder="Enterr your email"
              className="h-16 p-5 outline-none  w-3/4   text-xl bg-transparent rounded-full border-2 border-emerald-300"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type="password"
              className="h-16 p-5 outline-none mt-4 w-3/4 bg-transparent rounded-full border-2 border-emerald-300 text-white text-xl "
              placeholder="Enter your password"
            />

            <button className="h-16 mt-6 w-3/4 bg-emerald-300 text-black text-2xl font-bold rounded-full border-2 border-emerald-300">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

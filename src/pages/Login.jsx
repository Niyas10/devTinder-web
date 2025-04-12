import React, { useState } from "react";
import LoginHook from "../hooks/LoginHook";

const Login = () => {
  const [emailId, setEmailId] = useState("niyasl23@gmail.com");
  const [password, setPassword] = useState("Niyas@123");
 const Login = LoginHook()


 const handleSubmit =(e)=>{
    e.preventDefault()
    Login(emailId,password)
 }


  return (
    <section className="flex justify-center bg-black items-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="card w-96 bg-[#080808] shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                value={emailId}
                className="input"
                placeholder="Enter your email"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                value={password}
                className="input"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>

            <div className="card-actions justify-center mt-4">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login
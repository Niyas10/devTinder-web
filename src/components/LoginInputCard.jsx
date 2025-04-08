import React, { useState } from "react";
import { userLogin } from "../ api/userApi";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import {  useNavigate } from "react-router-dom";

const LoginInputCard = () => {
  const [emailId, setEmailId] = useState("niyasl23@gmail.com");
  const [password, setPassword] = useState("Niyas@123");

  const dispatch =  useDispatch();
 const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await userLogin(emailId, password );
      dispatch(addUser(res.data))
      navigate("/feed")
    } catch (err) {
      console.error("Login Failed", err);
    }
  };

  return (
    <>
      <section className="flex justify-center bg-[black]  items-center min-h-screen">
        <form onSubmit={handleSubmit}>
          <div className="card w-96 bg-[#080808] card-md shadow-sm   ">
            <div className="card-body">
              <h2 className="card-title  justify-center">Login</h2>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input
                  type="email"
                  value={emailId}
                  className="input "
                  placeholder="enter your email id "
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input
                  type="password"
                  value={password}
                  className="input "
                  placeholder="enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>

              <div className=" card-actions  justify-center">
                <button type="submit" className="btn ">
                  submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginInputCard;

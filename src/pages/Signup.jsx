// pages/Signup.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpHook from "../hooks/SIgnUpHook";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState();

  const signupsave = SignUpHook();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    signupsave({ firstName, emailId, age, password, gender });
  };

  return (
    <section className="flex justify-center bg-black items-center min-h-screen">
      <form onSubmit={handleSignUp}>
        <div className="card w-96 bg-[#080808] shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">Sign Up</h2>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                value={firstName}
                type="text"
                className="input"
                placeholder="Enter your name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                value={emailId}
                type="email"
                className="input"
                placeholder="Enter your email"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Confirm Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="number"
                className="input"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Gender</legend>
              <select
                className="input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="others">other</option>
              </select>
            </fieldset>

            <div className="card-actions justify-center mt-4">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>

            <p className="text-center mt-2">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Signup;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Feed from "../pages/Feed";
import Landing from "../pages/Landing";


const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
     
 
    </Routes>
  );
};

export default UserRoute;

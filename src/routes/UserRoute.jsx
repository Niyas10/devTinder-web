import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Feed from "../pages/Feed";
import Landing from "../pages/Landing";
import PrivetRouter from "../pages/PrivetRouter";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivetRouter />}>
        <Route path="/feed" element={<Feed />} />
    
      </Route>
    </Routes>
  );
};

export default UserRoute;

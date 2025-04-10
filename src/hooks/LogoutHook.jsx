import React from "react";
import { userLogout } from "../api/userApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/slices/userSlice";

const LogoutHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      const data = await userLogout();
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  return Logout;
};

export default LogoutHook;

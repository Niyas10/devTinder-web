import React from "react";
import { userLogin } from "../api/userApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/slices/userSlice";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (emailId, password) => {
    try {
      const res = await userLogin(emailId, password);
      dispatch(addUser(res.data));
      navigate("/feed" ,{replace:true});
    } catch (err) {
      console.error("login failed", err);
    }
  };
  return login;
};

export default LoginHook;

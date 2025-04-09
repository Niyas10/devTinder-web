import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginInputCard from "../components/LoginInputCard";

const Login = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    if (userData && userData._id) {
      navigate("/feed"); 
    }
  }, [userData]);


  return <LoginInputCard />; 
}
export default Login;

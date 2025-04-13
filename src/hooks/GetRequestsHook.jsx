import { useEffect, useState } from "react";
import { userRequests } from "../api/userApi";

const GetRequestsHook = () => {
  const [request, setRequest] = useState([]);


  const fetchRequest = async () => {
    try {
      const res = await userRequests();
      setRequest(res.data.data);
    } catch (err) {
      console.error("Error fetching Connections", err);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return { request, refetchRequests: fetchRequest }; 
};

export default GetRequestsHook;

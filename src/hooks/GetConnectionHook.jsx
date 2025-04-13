import { useState, useEffect } from 'react';
import { userConnections } from '../api/userApi';

const GetConnectionHook = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const res = await userConnections();
        setConnections(res.data.data);
      } catch (err) {
        console.error("Error fetching connections:", err);
      }
    };

    fetchConnections();
  }, []);

  return connections;
};

export default GetConnectionHook;

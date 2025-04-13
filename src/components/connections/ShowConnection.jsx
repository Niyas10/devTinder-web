import React from 'react';
import GetConnectionHook from '../../hooks/GetConnectionHook';

const ShowConnection = () => {
  const connections = GetConnectionHook();

  if(!connections) return
  if(connections.length ===0) return <h1>No Connections Found</h1>

  return (
    <div className="p-6 space-y-6 ">
      {connections.map((conn, index) => (
        <div
          key={index}
          className="flex items-center gap-6 p-4 border rounded-2xl shadow-md max-w-md "
        >
          <img
            src={conn.photoUrl}
            alt="Connection image "
            className="w-[100px] h-[100px] object-cover rounded-xl"
          />
          <div>
            <h3 className="text-xl font-semibold">{conn.firstName} {conn.lastName}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowConnection;

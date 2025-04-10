import React from 'react';

const ShowFeed = ({ user }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img
            src={user.photoUrl}
            alt="User"
            className="w-full h-100 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.firstName +" "+user.lastName}</h2>
        
          <p>{user.age}</p>
          <p>{user.skills}</p>
          <p>{user.about}</p>
          <div className="card-actions justify-center gap-[20px] mt-[20px]">
            <button className="btn btn-primary">rejected</button>
            <button className="btn btn-secondary">intrested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFeed;

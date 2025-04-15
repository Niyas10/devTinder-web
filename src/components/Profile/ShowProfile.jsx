import React from "react";

const ShowProfile = ({ user }) => {
  return (
<>
{ user ?  (<div className="flex items-center justify-center">
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
        <img
  src={ user.photoUrl || "https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_640.png"}
  alt="Profile"
  className=" w-full h-250px  object-cover"
/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {user.firstName + " " + user.lastName}
          </h2>

          <p>Age: {user.age}</p>
          <p>About: {user.about}</p>

          <div className="card-actions justify-center gap-[20px] mt-[20px]">
            <button className="btn btn-primary">Rejected</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>) :(
      <p>NO feed</p>
    )}

</>
  )}
export default ShowProfile

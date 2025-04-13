import React from 'react'
import GetRequestsHook from '../../hooks/GetRequestsHook'

const ShowRequests = () => {
  const request = GetRequestsHook()


  if(!request) return <p>Loading ... !</p>
  if(request.length===0)  return  <p className='flex justify-center align-middle'> No Requests Found </p>

  return (
<>
<div className="p-6 space-y-6 ">
      {request.map((req, index) => (
        <div
          key={index}
          className="flex items-center gap-6 p-4 border rounded-2xl shadow-md max-w-md "
        >
          <img
            src={req.fromUserId.photoUrl}
            alt="Connection image "
            className="w-[100px] h-[100px] object-cover rounded-xl"
          />
          <div>
            <h3 className="text-xl font-semibold">{req.fromUserId.firstName} {req.fromUserId.lastName}</h3>
            <p>{req.fromUserId.about}</p>
          </div>
          <div className='gap-[5px] flex flex-col'>
            <button className='btn btn-primary'>reject</button>
            <button className='btn btn-secondary'>accept</button>
          </div>
        </div>
      ))}
    </div>


</>
  )
}

export default ShowRequests

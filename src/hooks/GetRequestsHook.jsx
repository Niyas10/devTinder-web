import React, { useEffect, useState } from 'react'
import { userRequests } from '../api/userApi'

const GetRequestsHook = () => {
  const [request,setRequest] = useState([])

useEffect(()=>{
const fetchRequest = async ()=>{
  try{
    const res = await userRequests()
 
  
    setRequest(res.data.data)

  }catch(err){
    console.error('Error fetching Connections',err)
  }
}
fetchRequest()
},[])

  return  request
}

export default GetRequestsHook
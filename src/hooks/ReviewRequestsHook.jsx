import React from 'react'
import { userReviewRequest } from '../api/userApi';

const ReviewRequestsHook = () => {
    const reviewReq= async (status,requestId)=>{
        try{
            const res = await  userReviewRequest(status,requestId)
            console.log(res)

        }catch(err){
            console.error("Error",err);
        }
    }
  return  reviewReq
}

export default ReviewRequestsHook
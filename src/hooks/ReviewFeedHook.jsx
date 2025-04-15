import React from 'react'
import { feedReview } from '../api/userApi'
import { useDispatch } from 'react-redux'
import { removeUserFeed } from '../store/slices/feedSlice'

const ReviewFeed = () => {
  const dispatch = useDispatch()
  const reviewFeed = async (status,userId)=>{
   try{
    const res = await feedReview(status,userId)
    dispatch(removeUserFeed(userId))
   
   }catch(err){
    console.error("Error",err)
   }
  }

  return  reviewFeed
}

export default ReviewFeed
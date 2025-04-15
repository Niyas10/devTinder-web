import React from 'react'
import { userSignUp } from '../api/userApi'
import { useNavigate } from 'react-router-dom'

const SIgnUpHook = () => {
    const navigate = useNavigate()

const signUp =async(userData)=>{
    console.log(userData+"userData")
  try{
    const res = await userSignUp(userData)
    console.log(res+'hey')
    navigate("/login")

  }catch(err){
    console.error("ERROR",err)
  }
}

  return signUp
}

export default SIgnUpHook
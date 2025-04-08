import { userAxiosInstance } from "./axiosInstance";

export const userLogin = async (emailId,password)=>{
    const data  = await  userAxiosInstance.post('/login',{emailId,password});
    return data 
}
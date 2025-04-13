import { userAxiosInstance } from "./axiosInstance";

export const userLogin = async (emailId,password)=>{
    const data  = await  userAxiosInstance.post('/login',{emailId,password});
    return data ;
}

export const userProfileView = async ()=>{
    const data = await userAxiosInstance.get("/profile/view");
    return data ;
}

export const userLogout = async ()=>{
    const data = await userAxiosInstance.post("/logout")
    return data 
}

export const userFeeds = async()=>{
    const data = await userAxiosInstance.get("/feed")
    return data 
}

export const editProfile = async (profileData) => {
    const data  = await userAxiosInstance.patch("/profile/edit", profileData);
    return data ;
  };

export const  userConnections = async ()=>{
    const data = await userAxiosInstance.get("/user/connections")
    return data 
}
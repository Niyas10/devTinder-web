import { userAxiosInstance } from "./axiosInstance";

export const userLogin = async (emailId,password)=>{
    const data  = await  userAxiosInstance.post('/login',{emailId,password});
    return data ;
}

export const userSignUp = async (userData)=>{
    const data = await userAxiosInstance.post("/signup",userData);
    return data 
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


export const userRequests = async ()=>{
    const data = await userAxiosInstance.get("/user/requests/received")
    return data 
}

export const userReviewRequest = async (status,requestId)=>{
    const data = await userAxiosInstance.post(`/request/review/${status}/${requestId}`)
    console.log(data+"hey")
     return data 
}

export const feedReview = async (status,userId)=>{
    const data = await userAxiosInstance.post(`/request/send/${status}/${userId}`)
    console.log(data)
    return data ; 
}
import axios from 'axios'

const userBaseUrl = import.meta.env.VITE_USER_API_BASE_URL

const attachToken = (req,tokenKey)=>{
     const token = localStorage.getItem(tokenKey)
     if(token){
        req.headers.Authorization = `Bearer ${token}`
     }
     return req
}

export const userAxiosInstance = axios.create({
    baseURL:userBaseUrl,
    timeout:10000,
    withCredentials:true,
    headers : {
        "Content-Type" : "application/json"
    }
})

userAxiosInstance.interceptors.request.use(
    (req)=>attachToken(req,'userToken'),
    (error) =>Promise.reject(error)
)
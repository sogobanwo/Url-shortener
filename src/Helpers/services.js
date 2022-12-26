import axiosInstance from "./axiosConfig";


export const shorten = async(links)=>{
 let response = await axiosInstance.post(`/shorten?url=${links}`)
 return response
}


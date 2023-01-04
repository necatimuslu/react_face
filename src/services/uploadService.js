import axios from "axios"
import { baseUrl } from "../helpers/baseUrl"

export const uploadImages = async (formData,path,token) => {
    try {
        const { data } = await axios.post(`${baseUrl}/image/imageUpload`,formData,{
            headers:{
                Authorization:`Bearer ${token}`,
                "content-type":"multipart/form-data"
            }
        }) ;
        
        return data;
    } catch (error) {
        return error.response.data.message;
    }
}

export const updateProfilePictureDB = async(url,token) => {
    try {
        const { data } = await axios.post(`${baseUrl}/auth/updateProfilePicture`,{url},{
            headers:{
                Authorization:`Bearer ${token}`,
                "content-type":"multipart/form-data"
            }
        }) ;
        
        return 'ok';
    } catch (error) {
        return error.response.data.message;
    }
}
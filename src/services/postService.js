import axios from "axios";

import { baseUrl } from '../helpers/baseUrl';
export const createPostService = async (type,text,user,images,background,token) => {
    try {
        const {data} = await axios.post(`${baseUrl}/post/createPost`, {type,text,user,images,background},
        {
            headers:{
                Autorization : `Bearer ${token}`
            }
        }
        );
        return 'ok';
    } catch (error) {
        return error.response.data.message;
    }
}

export const updateEmoji = async (postId,emoji,token)=> {
    try {
        const {data} = await axios.put(`${baseUrl}/post/updateEmoji`,{postId,emoji},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return "ok";
    } catch (error) {
        return error.response.data.message
    }
}
export const getAllEmoji = async (postId,token)=> {
    try {
        const {data} = await axios.get(`${baseUrl}/post/getAllEmojis/${postId}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        return error.response.data.message
    }
}

export const newComment = async (comment,image,postId,token)=> {
    try {
        const { data } = await axios.put(`${baseUrl}/post/newComment`,{
            comment,image,postId
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        return error.response.data.message
    }
}
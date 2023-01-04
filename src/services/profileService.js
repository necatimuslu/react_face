import axios from "axios";
import { baseUrl } from "../helpers/baseUrl";

export const addFriend = async(id,token)=> {
    try {
        const { data } = await axios.put(`${baseUrl}/sendFriendRequest${id}`,{},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return "ok"
    } catch (error) {
        return error.response.data.message;
    }
}
export const cancelFriend = async(id,token)=> {
    try {
        const { data } = await axios.put(`${baseUrl}/cancelFriendRequest${id}`,{},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return "ok"
    } catch (error) {
        return error.response.data.message;
    }
}
export const follow = async(id,token)=> {
    try {
        const { data } = await axios.put(`${baseUrl}/follow${id}`,{},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return "ok"
    } catch (error) {
        return error.response.data.message;
    }
}
export const unfollow = async(id,token)=> {
    try {
        const { data } = await axios.put(`${baseUrl}/unfollow${id}`,{},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return "ok"
    } catch (error) {
        return error.response.data.message;
    }
}
export const acceptRequest = async(id,token)=> {
    try {
        const { data } = await axios.put(`${baseUrl}/acceptRequest${id}`,{},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return "ok"
    } catch (error) {
        return error.response.data.message;
    }
}
export const unfriend = async(id,token)=> {
    try {
        const { data } = await axios.put(`${baseUrl}/unfriend${id}`,{},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return "ok"
    } catch (error) {
        return error.response.data.message;
    }
}
export const deleteRequest = async(id,token)=> {
    try {
        const { data } = await axios.put(`${baseUrl}/deleteRequest${id}`,{},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return "ok"
    } catch (error) {
        return error.response.data.message;
    }
}
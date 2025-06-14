import { create } from "zustand";
import { axiosInstance } from "./Axios";

export const useDataStore = create((set,get)=>({
    user:null,
    uniqueUsers:[],
    messageCount:null,
    wordCount:null,
    mediaCount:null,
    messagePercentage:null,
    monthData:null,
    monthMessageData:null,
    topWordsData:null,
    emojiData:null,

    getData:async(formData)=>{
        const response = await axiosInstance.post('/',formData,{
            headers:{
            'Content-Type':'multipart/form-data'
            }
        })
        if([200,201].includes(response.status)){
            set({user:response.data.user,uniqueUsers:response.data.unique_users,
                messageCount:response.data.message_count,wordCount:response.data.word_count,
                mediaCount:response.data.media_count,messagePercentage:response.data.message_percentage,
                monthData:response.data.month_data,topWordsData:response.data.top_words_data,emojiData:response.data.emoji_data,monthMessageData:response.data.month_message_data
            })
            
            console.log(response.data)
        return response.data
        }
        else{
            return {"error":true,"message":response.data}
        }
    }
}))
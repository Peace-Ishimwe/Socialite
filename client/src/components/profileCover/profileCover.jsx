import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const getProfileImage = () => {
    const [profileImageUrl , setProfileImageUrl] = useState()
    useEffect(()=>{
        const getProfile = async () => {
            const response = await axios.post("http://localhost:3000/v1/api/u/user/info/image/profile" , {} , {withCredentials: true})
            .then((response)=>{
                setProfileImageUrl(response.data.urlProfileImage)
            })
        }
        getProfile()
    },[])
    
    return profileImageUrl
}

export const getCoverImage = () => {
    const [coverImageUrl , setCoverImageUrl] = useState()
    useEffect(()=>{
        const getProfile = async () => {
            const response = await axios.post("http://localhost:3000/v1/api/u/user/info/image/cover" , {} , {withCredentials: true})
            .then((response)=>{
                setCoverImageUrl(response.data.urlCoverImage)
            })
        }
        getProfile()
    },[])
    
    return coverImageUrl
}

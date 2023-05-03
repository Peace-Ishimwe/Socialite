import React, { useEffect, useState } from "react";
import CardSuggested from "./suggestedForYou/cardSuggested";
import axios from "axios";

const SuggestedForYou = () => {
  const [responseData , setResponseData] = useState()

  useEffect(()=>{
    const fetchSuggested = async() =>{
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/home/suggested` , {} ,  {
        withCredentials: true
      } )
      if(response.data){
        setResponseData(response.data)
      }
    }
    fetchSuggested()
  },[])

  return (
    <div className="main-container mt-5">
      <div className="text-xl text-gray-700 dark:text-gray-200 font-medium w-11/12 sm:w-8/12 xl:w-8/12 mx-auto">Suggested for you</div>
      <div className="suggestedContainer min-w-[305px] w-11/12 sm:w-8/12 mx-auto h-fit mt-5d dark:bg-majorDark py-3 rounded-md flex overflow-x-scroll gap-4 mt-2">
        { responseData != null && 

          responseData.map((data)=>{
            return (
              <CardSuggested key={data._id} firstName={data.firstName} lastName={data.lastName} id={data._id} followers={data.followersCount} profile={data.profileImage}  />
            )
          })
        }
      </div>
    </div>
  );
};

export default SuggestedForYou;
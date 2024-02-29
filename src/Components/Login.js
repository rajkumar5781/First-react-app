import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Login = () => {
  const [data,setData]= useState(null)

  useEffect(()=>{
    async function callMe(){
      let data = await axios({
        url: "https://api.publicapis.org/entries",
              method: "GET"}
      )
      let params = {
        app_id:"8e27e7ed",
        app_key:"367c18edb1248316874b36223825a116",
        field: ['uri', 'label', 'image', 'calories', 'yield', 'source', 'ingredients'],
      type: 'public',
      q:'chicken',
      };
      const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
        params,
        paramsSerializer: params => {
          return Object.entries(params)
            .map(([key, value]) => {
              if (Array.isArray(value)) {
                return value.map(val => `${key}=${encodeURIComponent(val)}`).join('&');
              }
              return `${key}=${encodeURIComponent(value)}`;
            })
            .join('&');
        }
      });
      console.log(response);
      setData(data)
    }
    callMe()
    return(()=>{
      setData(null)
    })
  },[])
  useEffect(()=>{
    console.log(data)
    return(()=>{})
  },[data])
  return (
    <div className='w-screen h-screen overflow-hidden flex relative '>
        <img src='./images/backgroundImg.jpg' alt='' className='w-screen min-h-screen h-auto flex flex-col items-center justify-center top-0 left-0'></img>
        <div className=' flex items-center flex-col   md:w-508 w-[80%] z-10'>
        </div>
    </div>
  )
}

export default Login
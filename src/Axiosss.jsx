import React, { useEffect } from 'react'
import axios from 'axios'

const Axiosss = () => {

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>console.log(res))
        .catch(()=>console.log('errorrrr'))
    },[])
  return (
    <div>
    
    <h2>Axios</h2>
    </div>
  )
}

export default Axiosss
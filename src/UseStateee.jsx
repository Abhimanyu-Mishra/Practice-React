import React, { useState } from 'react'

const UseStateee = () => {
    const [sate, setState] = useState([
        {name: 'alok'},
        {name: 'abhi'}
    ])
  return (
    <div>
    
{
    sate && sate.map((i, index)=>{
        return(
            <div key={index}>
            {
                i.name
            }
            </div>
        )
    })
}
    </div>
  )
}

export default UseStateee
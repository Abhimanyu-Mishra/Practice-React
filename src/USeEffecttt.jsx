import React, { useEffect, useState } from 'react'

const USeEffecttt = () => {
    const [data, setData] = useState()

    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((re)=>re.json())
            .then((re)=>{
                console.log(re)
                setData(re)

            })
            .catch(()=>console.log('error'))
        },[]
    )
  return (
    <div>
    <h2>UseEffedct</h2>
    {
        data && data.map((i)=>{
           return(
                i.name
                )
        })
    }
    </div>
  )
}

export default USeEffecttt
import React, { useState } from "react"

const Child =(props) => {
    const [st, setSt]=useState('chacha')
    const btn=()=>{
props.dusra(st)
}
    return (
<div>
<h2>{props.transfer}</h2>
<button onClick={btn}>Click Me</button>
</div>
    )
}
export default Child;
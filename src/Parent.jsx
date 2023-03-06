import React, { useContext, useState } from "react"
import Child from "./Child";
import { store } from "./ContextApiii";
const Parent =() => {
    const [state, setState] = useState('alok')
    const [context] = useContext(store)

    const fun= (st) => {
console.log(st)
    }
    return (
<div>
<Child transfer={state} dusra={fun}/>

{
    context && context.map((i)=>{
        return(
            <div>
            <h3>{i.name}</h3>
            </div>
        )
    })
}
</div>
    )
}
export default Parent;
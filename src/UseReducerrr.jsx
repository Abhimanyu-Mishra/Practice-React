import React, { useReducer } from 'react'

const UseReducerrr = () => {

    const reduce = (state, action) => {
switch(action.type){
    case 'Incre':
        return (state+1);
        case 'Decre':
            return (state-1)
}
    }
let initial=0
    const [state, dispatch]=useReducer(reduce, initial)
  return (
    <div>
    <h2>UseReducer</h2>
{state}
    <button onClick={()=>{dispatch({type:'Incre'})}}>Incre</button>
    <button onClick={()=>{dispatch({type:'Decre'})}}>Decre</button>
    </div>
  )
}

export default UseReducerrr
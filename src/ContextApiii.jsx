import React, { createContext, useState } from 'react'
export const store = createContext()
const ContextApiii = (props) => {
    const [detail, setDetail] = useState([
        {name:'alok'},
        {name:'abhi'},
        {name:'anurag'}
    ])
  return (
    <div>
    <store.Provider value={[detail, setDetail]}>
    {props.children}
    </store.Provider>
    
    
    </div>
  )
}

export default ContextApiii
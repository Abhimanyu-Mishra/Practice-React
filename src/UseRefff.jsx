import React, { useRef } from 'react'

const UseRefff = () => {
    const nnnnn = useRef()
    const email = useRef()

    const btn = () => {
        const res1 = nnnnn.current.value;
        const res2 = email.current.value;
        console.log(res1, res2)
    }
  return (
    <div>
    <input type='text' ref={nnnnn} / >
    <input type='text' ref={email}/>
    <input type='submit' onClick={btn}/>
    </div>
  )
}

export default UseRefff
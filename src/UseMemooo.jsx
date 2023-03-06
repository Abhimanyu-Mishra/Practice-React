import React, { useMemo, useState } from 'react'

const UseMemooo = () => {
    const [incr, setIncr] = useState(0);
    const [dncr, setDncr] = useState(0);

    const incre = () => {
        setIncr(incr+1)
    }
    const decre = () => {
        setDncr(dncr-1)
    }

    const IsEven = useMemo(() => {
        for(let i=0;i<100000000; i++){
            return (incr%2==0)
        }

    },[incr])

  return (
    <div>

    {incr}

    {dncr}
    <button onClick={incre}>Incere</button>

    {IsEven ? "Even" : "Odd"}
    <button onClick={decre}>Decre</button>
    </div>
  )
}

export default UseMemooo
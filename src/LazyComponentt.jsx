import React from 'react'
import { lazy, Suspense } from 'react'

const LazyComponentt = () => {
    const Parent = lazy(()=>import ('./Parent'))
  return (
    <div>
<Suspense fallback={<div>Loading.....</div>}>
<Parent />

</Suspense>
    
    
    
    </div>
  )
}

export default LazyComponentt
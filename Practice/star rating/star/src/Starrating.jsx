import React, { useState } from 'react'

const Starrating = () => {

    const[rating, setRating] = useState(0)
    const[hover, setHover] = useState(0)

  return (
    <div>
      {[...Array(5)].map((_,index) => (
        <span
        key={index}
        onClick={()=>setRating(index+1)}
        onMouseEnter={()=>setHover(index+1)}
        onMouseLeave={()=>setHover(0)}
        >
            {index<(hover || rating)?"★":"☆"}
        </span>
      ))}
    </div>
  )
}

export default Starrating

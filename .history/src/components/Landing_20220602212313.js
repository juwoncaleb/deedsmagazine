
import React, { useState, useEffect } from "react";
import Loader from './Loader'

function Landing() {
 
  

  const [preLoader , setPreloader] = useState(true)

  return (
    <div>
        <Loader/>
    </div>  
  
  )
}

export default Landing
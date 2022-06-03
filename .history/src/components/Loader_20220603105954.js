import React, { useState, useEffect } from "react";


import { useBetween } from "use-between";
export default function Loader() {
 
  const [preLoader , setPreloader] = useState(false)
  

  
  return (
    <div className={preLoader ? "loaderPage2" : "loaderPage"} >
      <img className='loader' src='./loader.gif'/>
    </div>
  )
}


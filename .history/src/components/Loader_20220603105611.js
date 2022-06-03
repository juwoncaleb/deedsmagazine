import React, { useState, useEffect } from "react";


import { useBetween } from "use-between";
export default function Loader() {
 
  const [preLoader , setPreloader] = useState(false)
  
//  const timer = setTimeout(() => {
//   setPreloader(true)

//   }, 7000);
//   console.log(preLoader);

  
  return (
    <div className={preLoader ? "loaderPage2" : "loaderPage"} >
      <img className='loader' src='./loader.gif'/>
    </div>
  )
}

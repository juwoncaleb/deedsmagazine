import React, { useState, useEffect } from "react";



export default function Loader() {
 
  const [preLoader , setPreloader] = useState(false)
 const timer = setTimeout(() => {
  setPreloader(true)

  }, 3000);
  console.log(preLoader);

  
  return (
    <div className={preLoader ? "loaderPage" : loaderPage2} >
      <img className='loader' src='./loader.gif'/>
    </div>
  )
}

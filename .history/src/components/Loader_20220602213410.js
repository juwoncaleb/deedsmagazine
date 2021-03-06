import React, { useState, useEffect } from "react";



export default function Loader() {
 
  const [preLoader , setPreloader] = useState("")


  useEffect(() => {
    const timer = setTimeout(() => {
   let LoaderState = preLoader
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className='loaderPage' >
      <img className='loader' src='./loader.gif'/>
    </div>
  )
}

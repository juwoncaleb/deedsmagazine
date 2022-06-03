import React, { useState, useEffect } from "react";



export default function Loader() {
 
  const [preLoader , setPreloader] = useState(false)

  const timer = setTimeout(() => {
  setPreloader(true)

  }, 3000);
  lo

  useEffect(() => {
    const timer = setTimeout(() => {
  
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className='loaderPage' >
      <img className='loader' src='./loader.gif'/>
    </div>
  )
}

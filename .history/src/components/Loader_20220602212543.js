import React, { useState, useEffect } from "react";



export default function Loader() {
  useEffect(() => {
    const timer = setTimeout(() => {
  
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  const [preLoader , setPreloader] = useState(true)
  return (
    <div className='loaderPage' >
      <img className='loader' src='./loader.gif'/>
    </div>
  )
}

import React, { useState, useEffect } from "react";



export default function Loader() {
 
  const [preLoader , setPreloader] = useState("lo")


  useEffect(() => {
    const timer = setTimeout(() => {
let 
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className='loaderPage' >
      <img className='loader' src='./loader.gif'/>
    </div>
  )
}

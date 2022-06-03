import React, { useState, useEffect } from "react";



export default function Loader() {


  useEffect(() => {
    const timer = setTimeout(() => {
      const [preLoader , setPreloader] = useState("lo")

    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className='loaderPage' >
      <img className='loader' src='./loader.gif'/>
    </div>
  )
}

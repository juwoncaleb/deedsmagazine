
import React, { useState, useEffect } from "react";
import Loader from './Loader'

function Landing() {
  useEffect(() => {
    const timer = setTimeout(() => {
      
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
        <Loader/>
    </div>  
  
  )
}

export default Landing
import React, { useState, useEffect } from "react";

function HeroSection() {
  const [gero , setPreloader] = useState(false)
 const timer = setTimeout(() => {
  setPreloader(true)

  }, 3000);
  console.log(preLoader);
  return (
    <div className='hero'>
        
    </div>
  )
}

export default HeroSection
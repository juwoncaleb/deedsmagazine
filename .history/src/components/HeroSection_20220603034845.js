import React, { useState, useEffect } from "react";

function HeroSection() {
  const [hero , setPreloader] = useState(false)
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
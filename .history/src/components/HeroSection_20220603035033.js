import React, { useState, useEffect } from "react";

function HeroSection() {
  const [hero , setHero] = useState(false)
 
  const timer = setTimeout(() => {
  setHero(true)

  }, 3000);
  return (
    <div className='hero'>
        
    </div>
  )
}

export default HeroSection
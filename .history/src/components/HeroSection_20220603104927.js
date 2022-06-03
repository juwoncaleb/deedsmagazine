import React, { useState, useEffect } from "react";

function HeroSection() {
  const [hero , setHero] = useState(false)
 
  const timer = setTimeout(() => {
  setHero(true)

  }, 000);
  return (
    <div className={hero ? " hero" : "heroLogic"}>
        <img className="top" src="./nav.png" />
    </div>
  )
}

export default HeroSection
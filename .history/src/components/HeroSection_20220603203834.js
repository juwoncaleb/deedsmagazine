import React, { useState, useEffect } from "react";

function HeroSection() {
  const [hero , setHero] = useState(false)
 
  const timer = setTimeout(() => {
  setHero(true)

  }, 3000);
  return (
    <div className={hero ? " hero" : "heroLogic"}>
      <img src="./hero.jpg"/>
    </div>
  )
}

export default HeroSection

import React, { useState, useEffect } from "react";
import Loader from './Loader'
import HeroSection from "./HeroSection"
import LandingPage2 from "./LandingPage2";
import Footer from "./Footer";

function Landing() {
 
  


  return (
    <div>
        <Loader/>
        <HeroSection/>
        <LandingPage2/>
    </div>  
  
  )
}

export default Landing

import React, { useState } from "react";
import Loader from './Loader'

function Landing() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const [mobileToggle, setMobileToggle] = useState(false);


  return (
    <div>
        <Loader/>
    </div>  
  
  )
}

export default Landing
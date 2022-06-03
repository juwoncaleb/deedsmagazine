import React from 'react'

function Loader2() {
    
  const timer = setTimeout(() => {
    setHero(true)
  
    }, 3000);
  return (
    <div className='loader2'> 

    <img src='./loadafter.png'/>
        
   </div>
  )
}

export default Loader2
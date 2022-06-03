import React from 'react'

function Loader2() {
    const [hero , setHero] = useState(false)

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
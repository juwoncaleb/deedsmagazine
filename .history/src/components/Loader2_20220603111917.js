import React from 'react'

function Loader2() {
    const [loading , setLoading] = useState(true)

  const timer = setTimeout(() => {
    setLo(true)
  
    }, 3000);
  return (
    <div className='loader2'> 

    <img src='./loadafter.png'/>
        
   </div>
  )
}

export default Loader2
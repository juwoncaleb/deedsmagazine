import React,{useState} from 'react'

function Loader2() {
    const [loading , setLoading] = useState(true)

  const timer = setTimeout(() => {
    setLoading(false)
  
    }, 3000);
  return (
    <div className={hero ? " hero" : "heroLogic"}>
    <div className= {loading ?    loader2  :loading }> 

    <img src='./loadafter.png'/>
        
   </div>
  )
}

export default Loader2
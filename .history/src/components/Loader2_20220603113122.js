import React,{useState} from 'react'

function Loader2() {
    const [loading , setLoading] = useState(false)

  const timer = setTimeout(() => {
    setLoading(true)
  
    }, 3000);
    const router = useRouter();

  return (
    <div className={loading ? " loader2" : "loading"}>

    <img className='loadAfter' src='./loadafter.png'/>
        
   </div>
  )
}

export default Loader2
import React from 'react'

function HeroSection() {
  const [preLoader , setPreloader] = useState(false)
 const timer = setTimeout(() => {
  setPreloader(true)

  }, 3000);
  console.log(preLoader);
  return (
    <div className='hero'>
        
    </div>
  )
}

export default HeroSection
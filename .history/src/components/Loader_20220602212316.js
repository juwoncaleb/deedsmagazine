import React from 'react'

useEffect(() => {
  const timer = setTimeout(() => {

  }, 3000);
  return () => clearTimeout(timer);
}, []);
export default function Loader() {
  return (
    <div className='loaderPage' >
      <img className='loader' src='./loader.gif'/>
    </div>
  )
}

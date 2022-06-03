import React from 'react'

function Header() {
  return (
    <div className='flex bg-black justify-between'>
       <img         onClick={() => router.push("/Article")}
 className="top" src="./nav.png" />
       <img className="menu" src="./menu.png" />


    </div>
  )
}

export default Header
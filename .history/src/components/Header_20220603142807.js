import React from 'react'

function Header() {
  return (
    <div className='flex bg-black justify-between'>
       <img         onClick={() => router.push("/")}
 className="top" src="./nav.png" />
       <img         onClick={() => router.push("/Article")}
 className="menu" src="./menu.png" />


    </div>
  )
}

export default Header
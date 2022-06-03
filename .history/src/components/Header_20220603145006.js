import React,{useState} from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [active, setActive]= useState(true)

  return (
   
      <di className="flex bg-black justify-between">
      <img onClick={() => router.push("/")} className="top" src="./nav.png" />
      
      
      <img
        onClick={() => router.push("/Article")}
        className="menu"
        src="./menu.png"
      />
      <div className='come'>
        <p className='comm'>COMING SOON</p>
    </div>
    </di
   </div>
    
  );
}

export default Header;

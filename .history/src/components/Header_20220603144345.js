import React,{useState} from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [active, setActive]= useState(true)

  return (
   <div>
      <div className="flex bg-black justify-between">
      <img onClick={() => router.push("/")} className="top" src="./nav.png" />
      
      <div onClick={setActive}>
        
      <img
        
        className="menu"
        src="./menu.png"
      />
      </div>
      
    </div>
   
   
    <div className={active ? "come" : "no"}>
        <p className='comm'>COMING SOON</p>
    </div>
   
   
   
   </div>
    
  );
}

export default Header;

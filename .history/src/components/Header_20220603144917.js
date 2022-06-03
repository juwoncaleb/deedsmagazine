import React,{useState} from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [active, setActive]= useState(true)

  return (
   <div>
      <div className="flex bg-black justify-between">
      <img onClick={() => router.push("/")} className="top" src="./nav.png" />
      
      <div >
        
      <img 
        src="./menu.png"
      />
      </div>
      
    </div>
   
   
   
   
   </div>
    
  );
}

export default Header;

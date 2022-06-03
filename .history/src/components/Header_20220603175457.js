import React,{useState} from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [active, setActive]= useState(true)

  return (
   <div>
      <div className="flex bg-black justify-between header">
      <img onClick={() => router.push("/")} className="top mt-1" src="./nav.png" />
      
      <img
        onClick={() => router.push("/Article")}
        className="menu"
        src="./menu.png"
      />
      


    </div>
   </div>
    
  );
}

export default Header;

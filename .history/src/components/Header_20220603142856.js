import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <div className="flex bg-black justify-between">
      <img onClick={() => router.push("/")} className="top" src="./nav.png" />
      
      
      <img
        onClick={() => router.push("/Article")}
        className="menu"
        src="./menu.png"
      />
    </div>
  );
}

export default Header;

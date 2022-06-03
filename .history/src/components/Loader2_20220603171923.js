import React, { useState } from "react";
import { useRouter } from "next/router";

function Loader2() {
  const [loading, setLoading] = useState(false);

  const timer = setTimeout(() => {
    setLoading(true);
  }, 3000);
  const router = useRouter();

  return (
    <div className={loading ? " loader2" : "loading"}>
     
     <img
        onClick={() => router.push("/Article")}
        className="loadAfter"
        src="https://ik.imagekit.io/juwoncaleb/loadafter_78qkPoVUa.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1654273139240"
      />
    </div>
  );
}

export default Loader2;

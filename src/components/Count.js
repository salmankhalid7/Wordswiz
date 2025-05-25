import { useState } from "react";

export default function Count() {
  const [count,setcount]=useState(0);
  return (
    <>
      <div>
        <p>you clicke me {count} time</p>
        <button onClick={()=>setcount(count+1)}>Click me daddy</button>
      </div>
    </>
  )
}

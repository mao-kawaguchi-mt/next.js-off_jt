"use client";
import { useState } from "react" ;

export default function Counter () {
  const [count, setCount] = useState(0);

  return(
    <>
      <p>カウント： {count}</p>
      <button onClick = {() => setCount(count+1)}>+1</button>
      <button onClick = {() => setCount(count-1)}>-1</button>
    </>
  );
}

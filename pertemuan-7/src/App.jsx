import "./App.css";
import { useState, useEffect } from "react";

function App() {
  //useState
  const [count, setCount] = useState(10);

  //useEffect
  useEffect(()=>{
    console.log("useEffect berjalan")
  }, [count])

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(count + 1)}>Plus</button>
    </>
  );
}

export default App;

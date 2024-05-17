import { useState } from "react";

export default function Counter(){

    const [count, setCount] = useState(0);

 const handleIncrement = () => {
   setCount(prevCount => prevCount + 1);
 };

 const handleDecrement = () => {
   setCount(prevCount => prevCount - 1);
 };

 return (
   <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <h1>Counter App</h1>
     <h1>Count: {count}</h1>
     <div>
        <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>
     </div>
   </div>
 );
}
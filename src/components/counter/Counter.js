import React from 'react';
import { useState } from "react";

const CounterApp = () => {

   const [count, setCount] = useState(0);


const handelIncrement = () => {
     setCount(count + 1);
}
const handelDecrement = () => {
     setCount(count - 1);
}
const handelReset = () => {
     setCount(0);
}

  const getCountMessage = () => {
    if (count > 0) {
      return 'Count is Positive';
    } else if (count < 0) {
      return 'Count is Negative';
    } else {
      return 'Count is Zero';
    }
  }
return (
     <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1>Counter App</h1>
          <h2>{count}</h2>
             <button onClick={handelIncrement}>Increment</button>
             <button onClick={handelDecrement}>Decrement</button>
             <button onClick={handelReset}>Reset</button>
          <div>Message: {getCountMessage()}</div>
     </div>
);
}
export default CounterApp;
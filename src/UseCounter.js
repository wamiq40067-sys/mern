import { useState } from "react";

function UseCounter(initialvalue = 0){
    const[count,setCount] = useState(initialvalue);
    const Increment = () => setCount(count+1);
    const Decrement = () => setCount(count-1);
    const reset = () => setCount(initialvalue);
    return {count,Increment,Decrement,reset} // we use return so that we can use it outside our file 
}

export default UseCounter;

// function UseCounter(initialvalue = 0){
//     const[count,setCount] = useState(initialvalue);
//     const Increment = () => setCount(count+1);
//     const Decrement = () => setCount(count-1);
//     const reset = () => setCount(initialvalue);
//     return{count,Increment,Decrement,reset}
// }

// export default UseCounter;
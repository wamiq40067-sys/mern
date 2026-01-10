import { useState } from "react"

function Bgcolor() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  return (
    <div>
      <body style={{ backgroundColor: backgroundColor}}>
      </body>
      
        <p>The background color is: {backgroundColor}</p>
      <button onClick={()=>setBackgroundColor('red')}>Change to Red</button>
      <button onClick={()=>setBackgroundColor('blue')}>Change to Blue</button>
      <button onClick={()=>setBackgroundColor('green')}>Change to green</button>
      <button onClick={()=>setBackgroundColor('white')}>reset</button>
    </div>
  );
}

export default Bgcolor;

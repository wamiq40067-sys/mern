import { useState } from "react";

function Counter() {
	const[count,setCount] = useState(0);
	return(
		<>
		<div class="container">
			<h1 class="count">
				count:{count}
			</h1>
			
			<div class="buttons">
				<button onClick={()=>setCount(count+1)} class="increased"> Increased</button>
				<button onClick={()=>setCount(0)} class="reset"> reset </button>
				<button onClick={()=>setCount(count-1)} class="decreased"> Decreased</button>
			</div>
			
		</div>
		</>
	)
}
export default Counter;
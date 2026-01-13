// import { useState } from "react";



// function Counter() {
// 	const[count,setCount] = useState(0);
// 	return(
// 		<>
// 		<div class="container">
// 			<h1 class="count">
// 				count:{count}
// 			</h1>
			
// 			<div class="buttons">
// 				<button onClick={()=>setCount(count+1)} class="increased"> Increased</button>
// 				<button onClick={()=>setCount(0)} class="reset"> reset </button>
// 				<button onClick={()=>setCount(count-1)} class="decreased"> Decreased</button>
// 			</div>
			
// 		</div>
// 		</>
// 	)
// }
// export default Counter;



// import { useState,useEffect } from "react";

//     function Counter() {
// 	const[count,setCount] = useState(0);
// 	useEffect(() =>{
// 		console.log("useEffect Run")
// 	}); 
// 	return(
// 		<>
// 		<div>
// 		<h1>Counter:{count}</h1>
// 		<button onClick={() => {setCount(count+1)}}>Increased</button>
// 		<button onClick={() => {setCount(count-1)}}>decreased</button>
// 		<button onClick={() => {setCount(0)}}>reset</button>
// 		</div>
// 		</>
// 	)
// }

// export default Counter;

// import { useState,useEffect } from "react";

//     function Counter() {
// 	const[count,setCount] = useState(0);
// 	useEffect(() =>{
// 		console.log("useEffect Run")
// 	},[]); 
// 	return(
// 		<>
// 		<div>
// 		<h1>Counter:{count}</h1>
// 		<button onClick={() => {setCount(count+1)}}>Increased</button>
// 		<button onClick={() => {setCount(count-1)}}>decreased</button>
// 		<button onClick={() => {setCount(0)}}>reset</button>
// 		</div>
// 		</>
// 	)
// }

// export default Counter;

import { useState,useEffect } from "react";

    function Counter() {
	const[count,setCount] = useState(0);
	useEffect(() =>{
		console.log("useEffect Run")
	},[count]); 

	// function User() {
	// const[user,newUser] = useState(" ");
	// 	useEffect(() =>{
	// 		console.log("useEffect User run")
	// 	},[user]);
	// }
	return(
		<>
		<div>
		<h1>Counter:{count}</h1>
		<button onClick={() => {setCount(count+1)}}>Increased</button>
		<button onClick={() => {setCount(count-1)}}>decreased</button>
		<button onClick={() => {setCount(0)}}>reset</button>
		</div>
		{/* <div>
			<h1>User:{User}</h1>
			<input type="text" />
			<button onClick={() => {newUser(user)}}>enter</button>
		</div> */}
		</>
	)
}

export default Counter;


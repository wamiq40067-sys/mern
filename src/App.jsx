
// // // import Hello1 from "./hello1"
// // // import Welcome from "./Welcome"

// import Counter from "./counter"

// import Counter from "./counter"

// import Card2 from "./Card2"

// function App(){
//   return(
//     <>
//          <h1>wamiq</h1>
// //         <h2>aman</h2>
// //         <Hello1/>
// //         <Welcome/>
// //     </>

// //   )
// // }

// export default App
// import Card1 from "./Card1"

// function App(){
//   return(
//     <>
//     <div>
//       <Card2 Address="Wamiq"/>
//       <Card2 Address="Aman"/>
//       <Card2 Address="Adarsh"/>
//       <Card2 Address="hello"/>
//     </div>
//     </>
//   )
// }

// export default App

// function Header(){
// 					return <h1>Thin is header</h1>
// 				}					
// 			function Footer(){
// 					return<h2> This is footer </h2> 
// 				}	
// 			function App(){
//         return(
          
//           <>
// 					<Header/>
// 					<p>This is Nested Component</p>
// 					<Footer/>
// 				</>
//     )
// 			}

//       export default App

// import "../src/styles/counter.css";

// function App() {
// 		return(
// 			<>
// 			 <Counter/>
// 			</>
// 			)
// 		}
// 		export default App
		

// 		import BgColor from "./BgColor"
// function App () {
// 	return(
// 		<BgColor/>
// 	)
// }
// export default App
 
// import Counter from "./counter"
// function App() {
// 	return(
// 		<Counter/>
// 	)
// }

// export default App;
// import React from "react";
// import UseCounter from "./useCounter";
// function CounterComponent() {
// 	const{count,Increment,Decrement,reset} = UseCounter(5);
// 	return(
// 		<>
// 		<div>
// 			<h1>{count}</h1>
// 			<button onClick={Increment}>Increment</button>
// 			<button onClick={reset}>reset</button>
// 			<button onClick={Decrement}>Decrement</button>
// 		</div>
// 		</>
// 	)
// }
// export default CounterComponent;

import React from "react";
import UseCounter from "./useCounter";
function CounterComponent(){
	const{count,Increment,Decrement,reset} = UseCounter(5);
	return(
		<>
		<div>
			<h1>Count:{count}</h1>
			<button onClick={Increment}> Increment</button>
			<button onClick={Decrement}> decrement</button>
			<button onClick={reset}> reset</button>
		</div>
		</>
	)
}

export default CounterComponent;
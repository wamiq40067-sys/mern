
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

// import React from "react";
// import UseCounter from "./useCounter";
// function CounterComponent(){
// 	const{count,Increment,Decrement,reset} = UseCounter(5);
// 	return(
// 		<>
// 		<div>
// 			<h1>Count:{count}</h1>
// 			<button onClick={Increment}> Increment</button>
// 			<button onClick={Decrement}> decrement</button>
// 			<button onClick={reset}> reset</button>
// 		</div>
// 		</>
// 	)
// }

// export default CounterComponent;

// import React from 'react'
// import "../src/styles/Home.css";

// import { Routes,Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import ContactUs from './pages/ContactUs' 
// import CounterRoute from './pages/CounterRoute'
// import RandomNumbers from './pages/RandomNumbers'

// const App = () => {
//   return (
//     <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/counterroute" element={<CounterRoute/>}/>
//         <Route path="/randomnumbers" element={<RandomNumbers/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contactus" element={<ContactUs/>}/>
//     </Routes>
//   )
// }

// export default App;


//control components

// import React, { useState } from 'react'
// const NameForm = () => {
//   const[name,setName] = useState(""); 
//   const[email,setEmail] = useState("");
//   const[password,setPassword] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name,email,password);
//   }
//   return (
//     <>
//     <div>
//       <h1>Form</h1>
//       <form onSubmit={handleSubmit}>
//       <input 
//       type="text" 
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       placeholder="Enter your name"/>
//       {/* <p>your name: {name}</p> */}
//       <br /><br />
//       <input 
//       type="email" 
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       placeholder="Enter your Email"/>
//       {/* <p>your name: {email}</p> */}
//       <br /><br />
//       <input 
//       type="password" 
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       placeholder='Enter your Password'/>
//       {/* <p>your Password: {password}</p> */}
//       <br /><br />
//       <button type='submit'>submit</button>
//       </form>
//     </div>
//     </>
//   )
// }

// export default NameForm;


import React, { useState } from 'react'
import "../src/styles/Form.css"

const FormRevise = () => {
  const[formData,setFormdata] = useState({
    name:"",
    email:"",
    password:""});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name == "" ||formData.email == "" || formData.password == ""){
    alert("please enter Details")
  } else{
       console.log(formData.name,formData.email,formData.password); 
    }
  }
  
  return (
    <>
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={formData.name}
      onChange={(e) => setFormdata({...formData, name: e.target.value})}
      placeholder='Enter your name' />
      <br /><br />
      <input 
      type="email" 
      value={formData.email}
      onChange={(e) => setFormdata({...formData, email: e.target.value})}
      placeholder='Enter your Email'/>
      <br /><br />
      <input 
      type="password" 
      value={formData.password}
      onChange={(e) => setFormdata({...formData, password: e.target.value})}
      placeholder='enter your password'/>
      <br /><br />
      <button type='submit'>submit</button>
      </form>
    </div>
    </>
  )
}

export default FormRevise






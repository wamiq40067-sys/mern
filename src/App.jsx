
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


// import React, { useState } from 'react'
// import "../src/styles/Form.css"

// const FormRevise = () => {
//   const[formData,setFormdata] = useState({
//     name:"",
//     email:"",
//     password:""});
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.name == "" ||formData.email == "" || formData.password == ""){
//     alert("please enter Details")
//   } else{
//        console.log(formData.name,formData.email,formData.password); 
//     }
//   }
  
//   return (
//     <>
//     <div id='main'>
//       <h1>Form</h1>
//       <form onSubmit={handleSubmit}>
//       <input 
//       type="text"
//       value={formData.name}
//       onChange={(e) => setFormdata({...formData, name: e.target.value})}
//       placeholder='Enter your name' />
//       <br /><br />
//       <input 
//       type="email" 
//       value={formData.email}
//       onChange={(e) => setFormdata({...formData, email: e.target.value})}
//       placeholder='Enter your Email'/>
//       <br /><br />
//       <input 
//       type="password" 
//       value={formData.password}
//       onChange={(e) => setFormdata({...formData, password: e.target.value})}
//       placeholder='enter your password'/>
//       <br /><br />
//       <button type='submit'>submit</button>
//       </form>
//     </div>
//     </>
//   )
// }

// export default FormRevise

// import React from 'react'
// import Navbar from './student management app/Navbar'
// import { Routes,Route } from 'react-router-dom'
// import StudentHome from './student management app/StudentHome'
// import Faculty from './student management app/Faculty'
// import StudentList from './student management app/StudentList'
// import StudentPage from './student management app/StudentPage'


// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     <Routes>
//     <Route path='/studenthome' element={<StudentHome/>}></Route>  
//     <Route path='/studentpage' element={<StudentPage/>}></Route>  
//     <Route path='/faculty' element={<Faculty/>}></Route>  
//     <Route path='/studentlist' element={<StudentList/>}></Route>  
//     </Routes>
//     </>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const Weather = () => {
//   const[weather,setWeather] = useState("");
//   useEffect(() => {
//     fetch(``)
//     .then((response) => response.json())
//     .then((data) =>{
//       setWeather(data);
//       console.log(data);
//     });
//   },[])
//   return (
//     <>
//     <div>
//     {weather ? (
//         <>
//           <h3>Weather in {weather.name}</h3>
//           <p>Temperature: {weather.main.temp} °C</p>
//           <p>Condition: {weather.weather[0].description}</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//     </>
//   )
// }

// export default Weather

// import { useEffect, useState } from "react";

// function App() {
//   const [imgUrl, setImgUrl] = useState("");

//   useEffect(() => {
//     fetch("")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("API Output:", data);   
//         setImgUrl(data.message);            
//       });
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>Random Dog Image 🐶</h2>

//       {imgUrl && (
//         <img
//           src={imgUrl}
//           alt="dog"
//           style={{ width: "300px", borderRadius: "10px" }}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react'

// const Cat = () => {
//   const[cat,setCat] = useState("");
//   useEffect(()=> {
//     fetch("https://api.thecatapi.com/v1/images/search")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       setCat(data[0]);
//     });
//   }, []);
//   return (
//     <>
//     <div>
//     <h1>Cat</h1>
//     {cat && (
//       <img src={cat.url} alt="cat" />
//     )}  
//     </div>
//     </>
//   )
// }

// export default Cat


// import React, { useEffect, useState } from 'react'

// const Cat = () => {
//   const[cat,setCat] = useState("");
//   useEffect(()=> {
//     fetch("https://meowfacts.herokuapp.com/")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       setCat(data.data[0]);
//     });
//   }, []);
//   return (
//     <>
//     <div>
//     <h1>
//       cat Facts: {cat}
//       </h1>
//     </div>
//     </>
//   )
// }

// export default Cat


// import React, { useEffect, useState } from 'react'

// const Bird = () => {
//   const[bird,setBird] = useState("");
//   useEffect(() => {
//     fetch("https://xeno-canto.org/api/3/recordings")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       setBird(data.message);
//     });
//   }, [])
//   return (
//     <div>
//       <h1>bird:{bird}</h1>
//     </div>
//   )
// }

// export default Bird


import React, { useState } from 'react'
import "../src/styles/Weather.css"

const Weather = () => {
  const[weather,setWeather] = useState(null);
  const[city_name,setCity_name] = useState("");
  // const city_name = "London"
  const api_key = "5a9278fb868733a63a99b79fbdd65afd";
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setWeather(data);
    });
  }
  return (
    <>
    <div id='main'>
    <div id='form'>
    <h1 id='app'>Weather App</h1>
    <form onSubmit={handleSubmit} >
      <input type="text" 
      value={city_name}
      onChange={(e) => setCity_name(e.target.value)}
      placeholder='Enter location'
      id='location'/>
      <div>
      <button type='submit' id='submit'>Get Weather</button>
      </div>
      </form>
      </div>

    <div id='status'>
    {weather?.main && weather?.weather && (
      <>
      <h1>Temperature: {weather.main.temp}°C</h1>
      <h1>Weather Condition: {weather.weather[0].description}</h1>
      <h1>Humidity: {weather.main.humidity}</h1>
    </>
    )}
    </div>
    </div>
    </>
  )
}

export default Weather


// import axios from "axios";
// import { useEffect, useState } from "react";

// function App() {
//   const [imgUrl, setImgUrl] = useState(null);

//   useEffect(() => {
//     axios.get("https://dog.ceo/api/breeds/image/random")
//     .then((res) => {
//       console.log(res.data);
//       setImgUrl(res.data.message);
//     })
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>Random Dog Image 🐶</h2>

//       {imgUrl && (
//         <img
//           src={imgUrl}
//           alt="dog"
//           style={{ width: "300px", borderRadius: "10px" }}
//         />
//       )}
//     </div>
//   );
// }

// export default App;
// import Card from "./comp/Card"
// import Text from "./comp/Text";

import Reducer from "./Reducer/Reducer";
import Tailwind from "./Tailwindcss/Tailwind";
import Weather from "./Weather/Weather";

// import { useCallback, useState } from "react";
// import Call from "./mcallback/Call";

// import Mui from "./Mui/Mui";
// import Switc from "./Mui/Switch";


// import { createContext } from "react";
// import Child1 from "./Contextapi/Child1";
// import ChildA from "./Propdrill/ChildA";
// import Todo from "./Todo/Todo";

// import Form from "./comp/Form";
// import Hooks from "./Hooks";
// import Todo from "./Todo/Todo";
// import UseEffect from "./UseEffect";

// import Counter from "./comp/Counter";
// import Update from "./comp/Update";

// import Test from "./comp/Test";
 
// const data = createContext()
// const data1 = createContext()

// function App() {

//   // let data = [
//   //   {firstName:"Devanshu"},
//   //   {firstName:"Manny"},
//   //   {firstName:"Kizie"}
//   // ]

//   let userData = "Hey Buddy...! 🙂"
//   let secondData = "Hey ...! 😕"

//   // create provider consumer


//   return ( 
//     <>

//     {/* <data.Provider value={userData}>
//     <data1.Provider value={secondData}>
//     <Child1/>
//     </data1.Provider>
//     </data.Provider> */}

//       {/* <ChildA childa={userData}/> */}

//       {/* <UseEffect/> */}

//       {/* <Hooks/> */}
//       {/* <Todo/> */}

//       {/* <Form/> */}
//       {/* <Update/> */}
//       {/* <Counter/> */}

//       {/* <Test/> */}

//       {/* {
//         data.map((value,index)=>(
//           <Card data={value}/>
//         ))
//       }

   
//       <Text/> */}




//     </>
//    );
// }

// export default App;
// export {data,data1}

// import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Home from "./Webpage/Home";
// import About from "./Webpage/About";
// // import Navbar from "./Webpage/Navbar";
// import Footer from "./Webpage/Footer";
// import Todo from "./Todo/Todo";
// import Dynamic from "./Webpage/Dynamic";
// import UseEffect from "./UseEffect";
// import SingleProduct from "./Webpage/SingleProduct";

// function App() {
//   return ( 
//     <>
//         <BrowserRouter>
//         <Navbar/>
//           <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/todo" element={<Todo/>}/>
//             <Route path="/dynamic/:abc" element={<Dynamic/>}/>
//             <Route path="/data" element={<UseEffect/>}/>
//             <Route path="/single/:id" element={<SingleProduct/>}/>
//           </Routes>
//         <Footer/>
//         </BrowserRouter>
//     </>
//    );
// }

// export default App;


// function App() {
//   return ( 
//     <>
//       <Mui/>
//       <Switc/>
//     </>
//    );
// }

// export default App;

// import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Navbar from "./Mui/Navbar";
// import Login from "./Mui/Login";
// import Mui from "./Mui/Mui";
// import { useMemo, useState } from "react";

// function App() {


//   const [inc,setInc] = useState(0)
//   const [age,setAge] = useState(50)

//   function divide(){
//      console.log("Divider Fun")
//       return inc/2
//   }

//   const memoValeu = useMemo(divide,[inc])

//   return ( 

//       <>
//         {/* <BrowserRouter>
//         <Navbar/>
//           <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/todo" element={<Todo/>} />
//             <Route path="/about" element={<About/>}/>
//             <Route path="/login" element={<Login/>}/>
//             <Route path="/mui" element={<Mui/>}/>
//           </Routes>
//         </BrowserRouter> */}

//           <h1>Divide Value :- {memoValeu}</h1>
//         <h1>Value:-  {inc}</h1>
//         <button onClick={()=>{setInc(inc+1)}}>Increment</button>
//         <h2>AGe:- {age}</h2>
//         <button onClick={()=>{setAge(age-1)}}>Decrement</button>

        

//       </>

      

//    );
// }

// export default App;


// function App() {

//   const [age,setAge] = useState(50)
//   const [Inc,SetInc] = useState(0)

//   function handleAge(){
//     setAge(age-1)
//   }

//   function someTask(){
//     // Task
//   }

//   const memoFun = useCallback(someTask,[])

//   return ( 
//     <>
//         <h1> Age:- {age}</h1>
//         <button onClick={handleAge}>Age➕</button>
//         <h2>{Inc}</h2>
//         <button onClick={()=>{SetInc(Inc+1)}}>📍</button>
//         <Call dataFun = {memoFun}/>
//     </>
//    );
// }

// export default App;


function App() {
  return ( 
    <>

    {/* <Reducer/>
    <Tailwind/> */}

    <Weather/>

    </>

   );
}

export default App;
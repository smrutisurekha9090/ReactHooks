import React, { createContext } from "react";
import "./App.css";
import HooksRule from './component/HooksRule';
import UseStateObj from './component/UseStateObj';
import ShortCircuit from './component/ShortCircuit';
import UseEffect1 from './component/useEffect/UseEffect1';
import UseEffect2 from './component/useEffect/UseEffect2';
import UseEffectAPI from './component/useEffect/UseEffectAPI';
import UseRef from './component/useref/UseRef';
import Usecontext from "./component/useContext/Usecontext";
import CompA from "./component/useContext/CompA";
import UseReducer from "./component/useReducer/UseReducer";
import UseMemo from "./component/useMemo/UseMemo";
import UseCallback from "./component/useCallback/UseCallback";
import Custom1 from "./component/customHook/UseCustom1";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      {/* <HooksRule/> */}
      {/* <UseStateObj/> */}
      {/* <ShortCircuit/> */}
      <UseEffect1/>
      {/* <UseEffect2/> */}
      {/* <UseEffectAPI/> */}
      {/* <UseRef/> */}
      {/* <Usecontext />
      <FirstName.Provider value={"smruti surekha"}>
        <LastName.Provider value={"sahoo"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider> */}

      {/* <UseReducer/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      {/* <Custom1/> */}
    </>
  );
}

export default App;
export { FirstName, LastName };
// function App() {

//   // console.log(useState);
//   const [curVal,setcurVal] =useState(0)

//   const changeInc = ()=>{
//     let  val=curVal+1;
//     setcurVal(val);
//   }

//   const changeDec =()=>{
//     let val=curVal-1;

//     if(val === 0){
//       alert(`maximum limit reached`);
//     }else{
//       setcurVal(val);
//     }
//   }
//   return (
//     <>
//       <h1>{curVal}</h1>
//       <button className='btn' onClick={changeInc}>+</button>
//       <button className='btn' onClick={changeDec}>-</button>
//     </>
//   )
// }

// export default App

// import React ,{useState}from 'react'
// import "./App.css";

// const App = () => {

//   const [myName,setmyName] = useState('Sushil Kumar')
//   const clickme =() =>{
//     let val=myName;
//     if(val === 'Sushil Kumar'){
//         setmyName('Smruti Surekha Sahoo')
//     }else{
//         setmyName('Sushil Kumar')
//     }

//   }

//   return (
//     <>
//      <h1>{myName}</h1>
//      <button className='btn' onClick={clickme}>Click Me Here</button>
//     </>
//   )
// }

// export default App

// import React,{useState} from 'react';
// import "./App.css";

// function App() {
//   //u can use a hook inside a function
//   // console.log(useState('sushil Kumar'));

//   //  var val ='sushil Kumar';
//    const  [myName,setmyName]=useState('sushil Kumar');

//    const changeName =()=>{
//         // val ="Smruti Surekha Sahoo";
//         // console.log(val);
//         setmyName('Smruti Surekha Sahoo');
//    }
//    console.log(myName);

//   return (
//     <>
//       <h1>{myName}</h1>
//       <button className='btn' onClick={changeName}>Click Me Plz</button>
//   </>
//   )
// }

// export default App

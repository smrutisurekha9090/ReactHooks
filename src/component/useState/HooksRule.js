// 1: Always write it inside the component or function
// 2: Component name must be PascalCase (first letter should be uppercase)
// 3: we can directly import or we can directly write it using React.hookname.
// 4: Don't call Hooks inside loops, condition , or nested functions.

import React ,{useState}from 'react'
import "../App.css"


function HooksRule() {
    const[myName,setmyName] =useState('smruti surekha sahoo')
  return (
    <>
    <h1>{myName}</h1>
    </>
  )
}

export default HooksRule
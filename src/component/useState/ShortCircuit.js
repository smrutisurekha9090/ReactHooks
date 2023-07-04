import React ,{useState}from 'react'

function ShortCircuit() {
    const[myName,setmyName]=useState('')

  return (
    <>
        <h1>hello my name is surekha{myName || "smruti"}</h1>
        <h1>hello my name is surekha{myName && "smruti"}</h1>
        <h1>hello my name is surekha{myName ||
        <>
            <h1>hyy i am fine</h1>
            <p>tell me about your self</p>
        </>
        }</h1>
    </>
  )
}

export default ShortCircuit
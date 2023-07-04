import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [myData,setMyData]=useState("");
    // const[count,setCount]=useState();


    //return an object
    const count=useRef(0);
     
    useEffect(()=>{
        // setCount(count+1);
        count.current =count.current+1;
    })



    return (
        <>
          <input type="text" value={myData} onChange={(e)=>setMyData(e.target.value)} />
          <p>The number of times render:{count.current}</p>
        </>
      )
    
}

export default UseRef
// The useeffect hooks perform side effects in function components
// side effects are-data fetching,setting up a subscription and
// manually changing the DOM in React components
//hooks must be called on the top level of our components

import React, { useEffect, useState } from "react";
import UseTitleCount from "../customHook/UseTitleCount";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);

  //if we run an effect conditionally ,we can put that condition inside our hook

  // useEffect(() => {
  //   if (count >= 1) {
  //     document.title = `Chats (${count})`;
  //   } else {
  //     document.title = `chats`;
  //   }
  // }, [count]);

   // custom hook
   UseTitleCount(count);

  // console.log("Hello outside")

  const valuChang = () => {
    let g = count + 1;
    setCount(g);
  };

  return (
    <>
      <h1 style={{backgroundColor:"red"}}>{count}</h1>
      <button className="btn" onClick={valuChang}>
        Click Me
      </button>
    </>
  );
};

export default UseEffect1;

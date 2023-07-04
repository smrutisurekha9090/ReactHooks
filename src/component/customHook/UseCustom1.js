// Custom Hooks start with "use". Example: useFetch


import React, { useEffect, useState } from "react";
import UseTitleCount from "./UseTitleCount";

const UseCustom1 = () => {
  const [count, setCount] = useState(0);

  // custom hook
  UseTitleCount(count);

  const valuChang = () => {
    let g = count + 1;
    setCount(g);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={valuChang}>
        Click Me
      </button>
    </>
  );
};

export default UseCustom1;

// useReducer accept two argument (reducer,initialState)
// reducer function contains your custom state logic
// initialState contain an object
// The useReducer Hook returns the current state and a dispatch method.



import React,{useReducer} from 'react'

const initialState=0;

const reducer =(state, action)=>{
    console.log(state,action);
    if(action.type ==="INCREMENT"){
        return state+1;
    }if(action.type ==="DECREMENT"){
        return state-1;
    }
}

const UseReducer = () => {
    // const [count,setCount]=useState(0);

     const [state,dispatch] = useReducer(reducer, initialState);
    //reducer are pure function that takes in a state and action 
    //  and return a new state 

  return (
    <>
      <p>{state}</p>
      <button className='btn' onClick={()=>dispatch({type:"INCREMENT"})}>Inc</button>
      <button className="btn" onClick={()=>dispatch({type:"DECREMENT"})}>Dec</button>
    </>
  )
}

export default UseReducer

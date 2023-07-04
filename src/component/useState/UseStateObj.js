import React ,{useState}from 'react'

const UseStateObj = () => {

    const[myObj,setmyObj] =useState(
            {
                myName:"smruti",
                myAge:23,
                degree:"Btech"
            });
    const updateObj =()=>{
        // setmyObj({myName:"sushil kumar",myAge:21,degree:'Bcom'})
        // OR
        setmyObj({...myObj,myName:"sushil kumar"})
    }
  return (
    <div>
      <h1>hy i am name:{myObj.myName} & Age:{myObj.myAge} & Degree:{myObj.degree}</h1>
      <button className='btn' onClick={updateObj}>Update</button>
    </div>
  )
}

export default UseStateObj

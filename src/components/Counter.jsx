import { useState } from "react";

function Counter() {
  let [counter,setCount]=useState(0);
  function increamentHandler(){
    setCount((prev)=>prev+1)
  }
  function decreamentHandler(){
    setCount((prev)=>prev-1)
  }
    return (
      <>
      <div className="w-[400px] m-auto mt-[100px]">
        <h1  className="text-semibold text-neutral-800">Counter App </h1>
        <p>This is the Counter by Increament and Decreament</p>
        <div className="text-center ">
            <div className="text-lg font-black" >
            {counter}
            </div>
            <div className="flex gap-2 items-center justify-center">
            <button onClick={increamentHandler} className="text-semibold font-2xl bg-blue-500 text-white mt-3 px-3 py-2 rounded-lg">Increament</button>
            <button  onClick={decreamentHandler} className="text-semibold font-2xl bg-blue-500 text-white  mt-3 px-3 py-2 rounded-lg">Decreament</button>
            </div>
        
        </div>
      </div>
      </>
    )
  }
  
  export default Counter;
  
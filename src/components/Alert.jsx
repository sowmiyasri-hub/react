import { useState } from "react";

function Alert() {
 let[alertStatus,setalertStatus] = useState(false)
 function alertHandler(){
    setalertStatus((prev)=>!prev)
 }
    return (
      <>
      {
    alertStatus ? <div className="border bg-neutral-100 absolute right-10 top-5 text-lg px-3 py-3 rounded-xl"> This is an Alert </div> : ""
      
      }
      
      <div className="w-[400px] m-auto mt-20">
        <h1 className="font-semibold">This is the React Alert</h1>
        <p className="text-neutral-400 text-sm mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid neque vitae.</p>
        <buton onClick={alertHandler} className="bg-black text-white rounded-lg px-5 py-3 mt-12 cursor-pointer">{alertStatus ? 'Hide Alert' : 'Show Alert'}</buton>
      </div>
 
      </>
    )
  }
  
  export default Alert;
  
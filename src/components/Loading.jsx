import { useState } from "react"

function Loading() {
  let[loaderStatus,setloaderStatus] = useState(false)
  function loaderHandler(){
    setloaderStatus((prev)=>!prev)
  }
  return (
    <>
   <div className=" w-[400px] m-auto text-center">
    <h1 className="font-semibold mt-12">Hi this is the React Loader</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consequuntur quam. Culpa?</p>
    <button onClick={loaderHandler} className="bg-blue-400 text-neutral-800 p-3 rounded-lg flex gap-2 items-center m-auto mt-5 text-center"> 
     <div> Load Data </div> 
     {
        loaderStatus ?   <div className="loader"></div> : ""
     }
    
        </button>
   </div>
    </>
  )
}

export default Loading

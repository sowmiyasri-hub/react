import { useState } from "react";
function User(){

    let [user, setUser] = useState(
        {
            name: "Riya",
            profession: "Data Scientist",
            image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHwwfDB8fHww",
            requestSent : false,
            isFiend:false
        }
    )
    function requesHandler(){
        setUser((prev)=>(
            {
                ...prev,
                requestSent:true
            }
           
        ))
        console.log(user)
    }
    return(
      <>
      <div className=" w-[400px] flex justify-between items-center px-5 py-2 bg-white mx-auto rounded-lg mt-5">
      <div className="flex gap-4 items-center "> 
                        <img src={user.image} className="h-14 w-14 object-cover rounded-full" alt="" />
                    <div>
                        <p className="m-0">{user.name}</p>
                        <p className=" m-0 text-sm">{user.profession}</p>
                    </div>
                </div>
                <button onClick={requesHandler} className="">{user.requestSent ? 'Request Sent' : 'send Request'}</button>
            </div>
       
    
    
      </>
    )
  }
  export default User; 
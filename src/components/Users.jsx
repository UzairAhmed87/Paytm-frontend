import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [Filter,setFilter]=useState("")
    const [id,setId] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
          .get("http://localhost:3000/api/v1/user/currentUser", {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          })
          .then((res) => {
            setId(res.data.id)
            console.log(res.data.id);
            
            
          });
      }, []);
   
useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/user/bulk?filter="+Filter)
    .then(res=>{
        setUsers(res.data.user); 
    })
},[Filter])
    return <div className="mx-4">
        
        <div className="my-2">
            <input onChange={(e)=>{setFilter(e.target.value)}} type="text" placeholder="Search users..." className=" mx-auto flex mt-4 pr-40 px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div className="font-bold mt-6 text-3xl mb-2">
            Users
        </div>
        <div>
            
            
            {users.filter((user)=>user._id !== id).map((user) => <User key={user._id} user={user}  />)}
        </div>
        </div>
}

function User({user}) {
  
    const capitalize = (str) => {
        if (!str) return ''; // Handle empty strings
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    const navigate = useNavigate()
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {capitalize(user.firstName[0])}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full text-xl font-semibold">
                <div >
                    {capitalize(user.firstName)} {capitalize(user.lastName)}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e)=>{
                navigate("/send?id="+user._id+"&name="+user.firstName)
            }} label={"Send Money"} />
        </div>
    </div>
}
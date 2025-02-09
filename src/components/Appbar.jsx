import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";



const Appbar = () => {
  const [firstLetter, setfirstLetter] = useState("A");
  const [sideBar,setSideBar] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/v1/user/currentUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((res) => {
        setfirstLetter(res.data.firstName);
        
        
      });
  }, []);
  const toggleSideBar = ()=>{
    setSideBar((prev)=> !prev)
  }
  return (
    <div className="shadow h-14 flex justify-between bg-green-500 ">
      <div className="flex underline items-center gap-2 justify-center h-full font-semibold text-3xl ml-4">
        CashPort
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center text-2xl h-full mr-4 font-medium">
          Hello
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <button onClick={toggleSideBar} className="flex flex-col justify-center h-full text-xl">{firstLetter.charAt(0).toUpperCase()}</button>
        </div>
      </div>
      {sideBar && <Sidebar/>}
    </div>
  );
};

export default Appbar;

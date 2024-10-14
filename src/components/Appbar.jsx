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
      <div className="flex flex-col justify-center h-full font-semibold text-3xl ml-4">
        UPaisa App
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center text-xl h-full mr-4 font-medium">
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

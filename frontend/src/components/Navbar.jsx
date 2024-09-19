import { FaHome } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";
import axios from "axios";


export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  
    async function handleLogout(e){
        e.preventDefault()
        const {data}=await axios.get("http://localhost:3000/api/v1/auth/logout",{
            withCredentials:true
        })
        document.cookie=null;
        console.log(data);
        Cookies.set("client-token","empty")
        window.location.href="/"
        
    }

  return (
    <>
      {open ? (
        <aside className="block fixed top-0 z-10 h-full p-10 w-8/12 shadow-xl border border-slate-700 bg-purple-700 text-white md:hidden">
            <ul className="flex flex-col gap-10 items-center md:hidden">
            <a href="" className="flex flex-col gap-2 items-center text-sm ">
              <FaHome size={25} />
              Home
            </a>

            <a href="" className="flex flex-col gap-2 items-center text-sm">
              <BiTask size={25} />
              My Task
            </a>

            <a href="" className="flex flex-col gap-2 items-center text-sm">
              <MdCreateNewFolder size={25} />
              Create Task
            </a>

            <a href="/login">
              <button className="bg-white border-slate-400 shadow-md pt-2 pb-2 pl-6 pr-6 rounded-sm text-black">
                {user.name}
              </button>
            </a>
            <button onClick={handleLogout} className="bg-white border-slate-400 shadow-md pt-2 pb-2 pl-6 pr-6 rounded-sm text-black">
               Logout
              </button>

          </ul>
        </aside>
      ) : (
        <></>
      )}
      <header className="flex justify-around items-center p-4 border border-slate-300 shadow-lg bg-purple-700 text-white">
        <div className="flex items-center gap-2">
          <img src="./task.png" alt="" className="w-12" />
          <p>Task Manager</p>
        </div>
        <div>
          <ul className="hidden gap-10 items-center md:flex">
            <a href="" className="flex flex-col gap-2 items-center text-sm ">
              <FaHome size={25} />
              Home
            </a>

            <a href="" className="flex flex-col gap-2 items-center text-sm">
              <BiTask size={25} />
              My Task
            </a>

            <a href="" className="flex flex-col gap-2 items-center text-sm">
              <MdCreateNewFolder size={25} />
              Create Task
            </a>

            <a href="/login">
              <button className="bg-white border-slate-400 shadow-md pt-2 pb-2 pl-6 pr-6 rounded-sm text-black">
                {user.name}
              </button>
            </a>
          </ul>

          <button onClick={()=>setOpen(!open)} className="block md:hidden bg-slate-900 p-2 rounded-sm shadow-xl">
            <HiOutlineBars3CenterLeft size={30} />
          </button>
          
        </div>
        <button onClick={handleLogout} className="hidden bg-white border-slate-400 shadow-md pt-2 pb-2 pl-6 pr-6 rounded-sm text-black md:block">
               Logout
              </button>
      </header>
    </>
  );
};

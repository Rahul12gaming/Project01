import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

import { MdDelete } from "react-icons/md";
import { IoCloudDone } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";
import axios from "axios";



export const MyTaskCard = ({heading,desc,status,byDate,_id}) => {
    const [open,setOpen]=useState(false);
    
    async function update(){
      const {data}=await axios.put(`http://localhost:3000/api/v1/task/status/${_id}`,{
        status:"completed"
      },{
        withCredentials:true
      });

      console.log(data);
      window.location.reload()

    }

    async function deleteTask(){
      const {data}=await axios.delete(`http://localhost:3000/api/v1/task/${_id}`,{
        withCredentials:true
      });

      console.log(data);
      window.location.reload()

    }

  return (
    <>
      <div className="bg-white w-12/12 m-auto p-4 rounded-md shadow-lg  md:w-6/12 lg:w-4/12 sm:w-11/12 ">
        <div>
        <button onClick={()=>setOpen(!open)} className="relative left"><BsThreeDots size={25}/></button>
        {
            open?<div className="bg-slate-400 p-4 text-white text-sm  rounded-md">
            <ul className="flex  gap-4">
                <button  className="flex gap-2 items-center bg-green-500 p-2 rounded-md text-white"><MdEditSquare size={20}/> Edit</button>
                <button onClick={deleteTask} className="flex gap-2 items-center bg-red-500 p-2 rounded-md text-white"><MdDelete size={20}/>Delete</button>
                <button onClick={update} className="flex gap-2 items-center bg-slate-700 p-2 rounded-md text-white"><IoCloudDone size={20}/>Mark Complete</button>
            </ul>
        </div>:<></>
        }
        </div>

        <hr />
        <div className=" mt-4 flex flex-col gap-4">
          <p className="text-center text-2xl font-medium font-italic md:text-xl">{heading}</p>

          <hr />
          <p>
           {desc}
          </p>
          <div className="flex flex-wrap gap-4">
            {
              status==='pending'?(
            <button className="uppercase font-medium bg-red-500 pt-2 pb-2 pl-4 pr-4 border border-slate-300 rounded-md shadow-md text-white text-sm">{status}</button>

              ):(
            <button className="uppercase font-medium bg-green-500 pt-2 pb-2 pl-4 pr-4 border border-slate-300 rounded-md shadow-md text-white text-sm">{status}</button>

              )
            }
            <button className="bg-slate-500 pt-2 pb-2 pl-4 pr-4 border border-slate-300 rounded-md shadow-md text-white text-sm">Dadline: {byDate}</button>
          </div>
        </div>
      </div>
    </>
  );
};

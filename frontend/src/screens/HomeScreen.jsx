import { useDispatch, useSelector } from "react-redux"
import { Footer } from "../components/Footer"
import { MyTaskCard } from "../components/MyTask"
import { Navbar } from "../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
import { PiEmptyBold } from "react-icons/pi";

import { allTask, allTaskRequest } from "../store/slice/taskSlice"

export const HomeScreen=()=>
{
    const dispatch=useDispatch();
    // const [tasks,setTasks]=useState(null)
    const {task,isLoading}=useSelector((state)=>state.task)
    async function getTask(){
        dispatch(allTaskRequest());

        const {data}=await axios.get('http://localhost:3000/api/v1/task',{
            withCredentials:true
        })
        console.log(data);
        dispatch(allTask(data.task))

        
    }

    function completedTask(){
        const arr=task.filter((item)=>item.status==='completed');

        console.log(arr);
        
        if(arr.length===0)
        {
            setTasks(null)
        }
        else
        {
            setTasks(arr);
        }
        console.log(tasks);
        
        
    }

    function pendingTask(){
        const arr=task.filter((item)=>item.status==='pending');

        console.log(arr);
        setTasks(arr);
        console.log(tasks);
        
        
    }
    useEffect(()=>{

        getTask();
        // setTasks(task)
    },[])

    
    return (
        <>
            <>
                <Navbar/>
                <main className="flex flex-wrap gap-2 w-12/12 m-auto p-10 md:w-11/12">
                    {/* <div className="w-6/12 m-auto bg-white p-4 flex justify-between flex-wrap items-center">
                        <button onClick={completedTask}>Completed Task</button>
                        <button onClick={pendingTask}>Pending Task</button>
                    </div> */}
                  {
                    isLoading?<p>Loading</p>:(
                        
                            task.length===0?<>
                            <div className="m-auto flex flex-col gap-4 items-center bg-white shadow-xl rounded-md w-11/12 p-4 md:w-4/12">
                                <PiEmptyBold size={100} color="red"/>
                                <a className="w-6/12 p-4 bg-black rounded-md text-white font-medium text-center text-lg" href="/create"><button>Add Task</button></a>
                            </div>
                            </>:(
                                task.map((item,index)=>(
                                    <MyTaskCard key={index} {...item}/>
                            ))
                            )
    
                    )
                  }




                  
                </main>
                <Footer/>
            </>
        </>
    )
}
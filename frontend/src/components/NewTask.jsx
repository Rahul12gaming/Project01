import axios from "axios";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
export const NewTask = () => {
  const [select, setSelect] = useState(false);
  const [heading,setHeading]=useState();
  const [desc,setDesc]=useState();
  const [byDate,setDay]=useState();

  async function handleTask(e){

    e.preventDefault();
    console.log(typeof(byDate));
    
    const {data}=await axios.post("http://localhost:3000/api/v1/task/create",{
      heading,desc,byDate
    },{
      withCredentials:true
    })

    console.log(data);
    window.location.href="/"
    
    
  }
  return (
    <>
      <div className="mt-10 mb-10 bg-white w-10/12 m-auto p-4 rounded-md shadow-xl  md:w-4/12 ">
        <div>
          <h1 className="text-center text-xl m-4">Create New Task!</h1>
        </div>
        <hr />
        <div className=" mt-4 flex flex-col gap-4">
          {/* <inpu className="text-center text-2xl font-medium font-italic md:text-xl">Heading</p> */}

          <div className="flex flex-col gap-2 justify-start">
            <label htmlFor="">Heading</label>
            <input
              type="text"
              placeholder="Heading"
              onChange={(e)=>setHeading(e.target.value)}
              className="bg-slate-100 p-2 border border-slate-300 rounded-md shadow-lg"
            />
          </div>

          <hr />

          <div className="flex flex-col gap-2 justify-start">
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              onChange={(e)=>setDesc(e.target.value)}
              className="bg-slate-100 p-2 border border-slate-300 rounded-md shadow-lg"
            ></textarea>
          </div>

          <hr />
          
            <div className="flex flex-col gap-2 justify-start">
              <label htmlFor="">Select Deadline</label>
              {select ? (
                <></>
              ) : (
                <button
                  onClick={() => setSelect(!select)}
                  className="w-10/12 border border-black p-2 rounded-sm shadow-lg bg-slate-500 text-white m-auto "
                >
                  Select Deadline
                </button>
              )}
              {select ? <Calendar onChange={()=>setDay(new Date().toString())}/> : <></>}
            </div>
            <hr />

          
              <button onClick={handleTask} className="mt-2 w-10/12 border border-black p-2 rounded-sm shadow-lg bg-purple-500 text-white m-auto md:w-4/12">
                Create Task
              </button>
            

          
       
        </div>
      </div>
    </>
  );
};

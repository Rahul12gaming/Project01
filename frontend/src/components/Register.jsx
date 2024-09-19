import { useState } from "react";
import axios from 'axios'

export const Register = () => {
  const [show, setShow] = useState(false);
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [mobile,setMobile]=useState();
  const [password,setPassword]=useState();

  async function handleRegister(e){
    e.preventDefault();
    try
    {
      const {data}=await axios.post("http://localhost:3000/api/v1/auth/register",{
        name,email,mobile,password
      },{
        withCredentials:true
      });
      console.log(data);
      alert("Registration Successfull!")
      window.location.href="/";
    }
    catch(err)
    {
      alert(err.msg);
      
    }

   
    
  }

  return (
    <>
      <div className="auth">
        <div className=" register-content bg-white w-10/12 m-auto p-6 text-center md:w-4/12">
          <h3 className="text-2xl md:text-xl">Create Tour Account!</h3>
          <p className="text-sm m-2 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat
            dicta corrupti, labore non harum mollitia exercitationem itaque
            dolorem doloribus aperiam sequi hic? Sit minima aut quos, autem fuga
            eligendi.
          </p>
          <form action="" className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name=""
                id=""
                required
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter Your Name!"
                className="bg-slate-100 border border-slate-400 p-2 shadow-md rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name=""
                id=""
                required
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="bg-slate-100 border border-slate-400 p-2 shadow-md rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Mobile Number</label>
              <input
                type="text"
                name=""
                id=""
                required
                onChange={(e)=>setMobile(e.target.value)}
                placeholder="Enter Your Number!"
                className="bg-slate-100 border border-slate-400 p-2 shadow-md rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Password</label>
              {show ? (
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter Your Password!"
                  className="bg-slate-100 border border-slate-400 p-2 shadow-md rounded-md"
                />
              ) : (
                <input
                  type="password"
                  name=""
                  id=""
                  required
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter Your Password!"
                  className="bg-slate-100 border border-slate-400 p-2 shadow-md rounded-md"
                />
              )}
            </div>
            <div className="flex flex-col gap-1">
              {show ? (
                <label className="text-md">Hide Password</label>
              ) : (
                <label className="text-md">Show Password</label>
              )}
              <input
                type="checkbox"
                name=""
                id=""
                required
                onChange={() => setShow(!show)}
              />
            </div>

            <button onClick={handleRegister} className="w-10/12 border border-black p-2 rounded-sm shadow-lg bg-purple-500 text-white m-auto md:w-4/12">
              Register
            </button>

            <a className="text-sm text-blue-400" href="/">Already Have an Account?</a>
          </form>
        </div>
      </div>
    </>
  );
};

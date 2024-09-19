import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { HomeScreen } from "./screens/HomeScreen";
import { NewTaskScreen } from "./screens/NewTaskScreen";
import { ProtectedRoute } from "./middleware/ProtectedRoute";
import {  useDispatch } from "react-redux";
import axios from "axios";
import { userByToken } from "./store/slice/authSlice";


function App() {
  
  const dispatch=useDispatch()
  async function loadUser(){
    const {data}=await axios.get('http://localhost:3000/api/v1/auth',{
      withCredentials:true
    })
    console.log(data,'app.jsx');
    dispatch(userByToken(data.user))
    
  }
  useEffect(()=>{

    if(document.cookie)
    {
      loadUser();
    }
  },[])
  return (
    <>
      
      <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomeScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={<Register/>}
            />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <NewTaskScreen />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
    
       
      
    </>
  );
}

export default App;

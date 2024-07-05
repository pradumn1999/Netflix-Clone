import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Players from './pages/Players/Players';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const App = (props) => {
 
  const Navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
        if(user){
          console.log("Logged In");
          Navigate("/")
        }
        else{
          console.log("Logged Out");
          Navigate('/login');
        }
    })
  },[])

  return (
    
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Players/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
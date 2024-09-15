import { useEffect, useState } from 'react';
import React from 'react';
import useDispatch from 'react-redux';
import './App.css'
import authService from './appwrite/auth';
import { login , logout } from './store/authSlice';

function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))

  },[])

  return !loading ? (
    <div></div>
  ):null
  // return (
  //   <>
   
  //    <h1>A bolg with Appwrite</h1>
  //   </>
  // )
}

export default App

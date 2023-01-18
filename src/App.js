import "./App.css";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Pages/Home";
import { useSelector } from "react-redux";

function App () {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return <div>
      <Header />
   <Routes>  
    <Route path = '/login' element= {<Login />} /> 
    <Route path = '/' exact element= {isLoggedIn ?  <Home /> :< Navigate to = '/login' />  } /> 
   
   </Routes>
 
  </div>
}

export default App;
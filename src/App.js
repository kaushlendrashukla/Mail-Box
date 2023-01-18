import "./App.css";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import Compose from "./Components/Compose";

function App () {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return <div>
      <Header />
   <Routes>  
    <Route path = '/login' element= {!isLoggedIn ? <Login />:< Navigate to = '/' /> } /> 
    <Route path = '/' exact element= {isLoggedIn ?  <Home /> :< Navigate to = '/login' />  } /> 
    <Route path = '/compose' exact element= {isLoggedIn ?  <Compose /> :< Navigate to = '/login' />  } /> 
   
   </Routes>
 
  </div>
}

export default App;
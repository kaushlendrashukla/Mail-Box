// import { Nav, Navbar,Container } from "react-bootstrap";
import React from "react";
import classes from "./Header.module.css"
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/auth-slice";


const Header = () => {
const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
const dispatch = useDispatch ()
const logoutHandler = () => {
dispatch(authActions.logout())
}
    return (
        <div className={classes.container}>
            <div className={classes.nav}>
                <nav>
                <ul>
                    <li>
                        <NavLink  to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About us</NavLink>
                    </li> 
                     <li>
                        <NavLink to= '/contact'>Contact Us</NavLink>
                    </li>
                </ul>
                </nav>
            </div>
            <div className={classes.remaining}>
               { !isLoggedIn && <NavLink to = "/login">Login</NavLink>}
               {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
            </div>
        </div>
    )
}

export default Header
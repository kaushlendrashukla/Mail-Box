import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/auth-slice';
import { showActions } from '../store/show-slice';


const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const authHandler = () => {
    if (isLoggedIn) {
      dispatch(authActions.logout());
      dispatch(showActions.compose());
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.eighty}>
        <h1>Mailbox</h1>
      </div>
      <div className={classes.remaining}>
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {isLoggedIn && <button onClick={authHandler}>Logout</button>}
      </div>

    </div>
  );
};

export default Header;

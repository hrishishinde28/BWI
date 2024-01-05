import React from 'react';
import './Dashboard.css'; 
import Navbar from './Navbar';
import Cards from './Cards.js'

const Dashboard = (props) => {
  const {setIsLoggedIn,setUsername,setPassword,setCartItems,setCartTotal,cartItems,cartTotal}=props;
  console.log(props);
  const handleLogout = () => {
    // Clear the token from local storage and mark user as logged out
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };


  return (
    <>
      <Navbar cartItems={cartItems} cartTotal={cartTotal}  setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setPassword={setPassword} setCartItems={setCartItems} setCartTotal={setCartTotal}/>
      <Cards cartItems = {cartItems} cartTotal={cartTotal} setCartItems={setCartItems} setCartTotal={setCartTotal}/>
    </>
  );
};

export default Dashboard;

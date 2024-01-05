import React,{ useEffect, useState } from 'react';
import './Dashboard.css'; 
import Navbar from './Navbar';
import Cards from './Cards.js'

const Dashboard = (props) => {
  const {setIsLoggedIn,setUsername,setPassword,setCartItems,setCartTotal,cartItems,cartTotal}=props;
  console.log(props);
  const [Filter,setFilter]= useState("");
  
  useEffect(() => {

  },[Filter])
  const handleLogout = () => {
    // Clear the token from local storage and mark user as logged out
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };
  useEffect(() => {
    // Check if a token exists in local storage
     // Check if cartItems and cartTotal exist in local storage
     const storedCartItems = localStorage.getItem('cartItems');
     const storedCartTotal = localStorage.getItem('cartTotal');
    console.log(storedCartItems);
    console.log(storedCartTotal);
     // If cartItems or cartTotal do not exist, initialize them in local storage
     if (storedCartItems === null) {
       localStorage.setItem('cartItems', JSON.stringify(cartItems));
     }
 
     if (storedCartTotal === null) {
       localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
     }
   
  }, []);
  


  return (
    <>
      <Navbar cartItems={cartItems} cartTotal={cartTotal}  setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setPassword={setPassword} setCartItems={setCartItems} setCartTotal={setCartTotal} setFilter={setFilter} />
      <Cards cartItems = {cartItems} cartTotal={cartTotal} setCartItems={setCartItems} setCartTotal={setCartTotal} Filter={Filter}/>
    </>
  );
};

export default Dashboard;

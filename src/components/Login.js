// Login.js

import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import './Login.module.css';



export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [cartItems,setCartItems] = useState(0);
  const [cartTotal,setCartTotal] = useState(0);

  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      // Decode the token to get user information (For example, if token is JWT)
      const decodedToken = decodeToken(token);
      console.log(token);
      setUsername(decodedToken.username); // Get username from decoded token
    }
  }, []); // Empty dependency array to run this effect only once on mount

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          // If login successful, set token in local storage and mark user as logged in
          localStorage.setItem('token', data.token);
          localStorage.setItem('username',data.username);
          setUsername(username); // Save username in state
          setIsLoggedIn(true);
        } else {
          setError('Invalid username or password');
        }
      })
      .catch((error) => {
        setError('Something went wrong. Please try again.');
      });
  };

 
  const decodeToken = (token) => {
    // Your token decoding logic goes here
    // For example, if it's a JWT token, you can use a library like 'jsonwebtoken'
    // This function should decode the token and return user information
    // Replace this with your actual token decoding logic
    return { username: username }; // Replace with actual decoded user information
  };

  if (isLoggedIn) {
    return (
      <div className="container">

        
        <Dashboard cartItems={cartItems} cartTotal={cartTotal} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setPassword={setPassword} setCartItems={setCartItems} setCartTotal={setCartTotal}/>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default Login;

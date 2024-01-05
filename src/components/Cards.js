import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cards.css';

const Cards = (props) => {
  const [productData, setProductData] = useState([]);
  const { setCartItems, setCartTotal,cartItems,cartTotal } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProductData(response.data.products); // Update state with fetched data
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []); // Empty dependency array to execute only once on mount

  return (
    <div className='container'>
      {productData.map((item, index) => (
        <div className='card' key={index}>
          <div className='team-item'>
            <img src={item.images?.[0]} alt={item.title} className='team-img' />
            <h3>{item.title}</h3>
            <div className='team-info'>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p>{item.brand}</p>
              <button onClick={()=>{
                setCartItems(cartItems+1);
                setCartTotal(cartTotal+item.price)
              }}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

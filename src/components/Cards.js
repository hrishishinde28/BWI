import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cards.css';

const Cards = (props) => {
  const [productData, setProductData] = useState([]);
  const { setCartItems, setCartTotal,cartItems,cartTotal , Filter} = props;


  const handleAddToCart = (item) => {
      localStorage.setItem('cartTotal', JSON.stringify(cartTotal + item.price));
      localStorage.setItem('cartItems', JSON.stringify(cartItems + 1));
    setCartItems(cartItems + 1);
    setCartTotal(cartTotal + item.price);

    // Update local storage values for cartItems and cartTotal
  };

  const fetchData = async () => {
    try {
      let response = await axios.get('https://dummyjson.com/products');
      let sea=[];
      if(Filter.length>0){
        console.log(response, "Ham h aaft")
        response = response.data.products;
        for (let i = 0; i < response.length; i += 1) {
          const titleLowerCase = response[i].title.toLowerCase();
          const filterLowerCase = Filter.toLowerCase();
          
          if (titleLowerCase.includes(filterLowerCase)) {
            sea.push(response[i]);
          }
        }
        
        console.log(sea)
          setProductData(sea)
      }
      else{
        setProductData(response.data.products); // Update state with fetched data
      }
     
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {  
    console.log(productData)
    fetchData(); // Call the async function to fetch data
  }, [Filter]); // Empty dependency array to execute only once on mount

  // useEffect(() => {

  // },[Filter])
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
                handleAddToCart(item)
              }}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

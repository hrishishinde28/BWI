import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const MenuItems = [
    {
        price : "100 - 200"
    },
    {
        price : "200 - 500"
    },
    {
        price : "500 - 1000"
    },
    {
        price : "1000+"
    }
];

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className='dropdown-link'
                // to={item.path}
                onClick={() => setClick(false)}
              >
                {item.price}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
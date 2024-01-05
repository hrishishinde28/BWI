import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const MenuItems = [
    {
        price : "5000 - 10000"
    },
    {
        price : "10000 - 20000"
    },
    {
        price : "20000 - 30000"
    },
    {
        price : "30000+"
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
import React, { useState } from 'react';
/** Hooks rules
 * use - starts with this keyword
 * component name must be uppercase
 * must be in the function/component body
 * cannot call conditionally
 * */


const UseStateBasics = () => {
  const [title, setTitle] = useState('Random Title');

  const handleClick = () => {
      if (title === 'Random Title')
          setTitle('Hello world');
      else
          setTitle('Random Title');
  }

  return (
      <React.Fragment>
        <h2>{title}</h2>
        <button className='btn' type='button' onClick={handleClick}>
          Change title
        </button>
      </React.Fragment>
  );
};

export default UseStateBasics;

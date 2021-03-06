import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = id => setPeople(people.filter(person => person.id !== id));

  return (
      <>
        {
          people.map((person) => {
            const { id, name } = person;
            return (
                <div className='item' key={id}>
                    <h4>{name}</h4>
                    <button onClick={() => removeItem(id)}>
                        Remove item
                    </button>
                </div>
            );
          })
        }
        <button className='btn' onClick={() => setPeople([])}>
            Clear items
        </button>
      </>
  );
};

export default UseStateArray;

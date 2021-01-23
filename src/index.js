import React from 'react';
import ReactDOM from 'react-dom';

/** Nested Components
 * React tools
 * */


function Greeting(){
    return (
        <div className=''>
            <Person/>
            <Message/>
        </div>
    );
}

const Person = () => <h2>John Doe</h2>;
const Message = () => {
    return <p>This is my message</p>;
}

ReactDOM.render(
    <Greeting/>,
    document.getElementById('root')
);


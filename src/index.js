import React from 'react';
import ReactDOM from 'react-dom';

/** JSX rules
 * return single element
 * div / section / article or Fragment
 * use camelCase for html attribute
 * className instead of class
 * close every element
 * formatting
 * */


function Greeting(){
    return (
        <div className=''>
            <h3>Hello people</h3>
            <ul>
                <li>
                    <a href='#'>hello world</a>
                </li>
                <img src='' alt=''/>
                <input type="text"/>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <Greeting/>,
    document.getElementById('root')
);


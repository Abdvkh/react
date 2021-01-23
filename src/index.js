import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(){
    return (
        <div>
            <h1>Hello world! This is my first component</h1>
        </div>
    );
}

// const Greeting = () => {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement(
//             'h1',
//             {},
//             'Hello world')
//     );
// }

ReactDOM.render(
    <Greeting/>,
    document.getElementById('root')
);


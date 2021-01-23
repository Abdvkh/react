import React from 'react';
import ReactDOM from 'react-dom';

/** CSS */
import './index.css';

//setup vars
const books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
        author: 'Amelia Hepworth',
        title: 'I Love You to the Moon and Back',
    },
    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81gfKJtXGTL._AC_UL200_SR200,200_.jpg',
        author: 'Kamala Harris',
        title: 'Superheroes Are Everywhere',
    },
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg',
        author: 'Eric Carle',
        title: 'The Very Hungry Caterpillar',
    }
]

function BookList(){

    return (
        <section className="booklist">
            {books.map((book) => (<Book key={book.id} {...book}/>))}
        </section>
    );
};

const Book = ({ img, title, author }) => {
    //attribute, eventHandler
    //onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello world!');
    }

    const complexHandler = (author) => {
        console.log(author);
    };

    return (
        <article className="book" onMouseOver={() => {
            console.log(title)}}>
            <img src={img} alt=""/>
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h6>{author}</h6>
            <button type="button" onClick={clickHandler}>Press me</button>
            <button type="button" onClick={() => complexHandler(author)}>More complex</button>
        </article>
    );
};

ReactDOM.render(
    <BookList/>,
    document.getElementById('root')
);


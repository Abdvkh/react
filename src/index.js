import React from 'react';
import ReactDOM from 'react-dom';

/** CSS */
import './index.css';

//setup vars
const books = [
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
        author: 'Amelia Hepworth',
        title: 'I Love You to the Moon and Back',
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/81gfKJtXGTL._AC_UL200_SR200,200_.jpg',
        author: 'Kamala Harris',
        title: 'Superheroes Are Everywhere',
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg',
        author: 'Eric Carle',
        title: 'The Very Hungry Caterpillar',
    }
]

function BookList(){
    return (
        <section className="booklist">
            {books.map((book) => (<Book book={book}/>))}
        </section>
    );
};

const Book = (props ) => {
    const {img, title, author} = props.book;

    return (
        <article className="book">
            <img src={img} alt=""/>
            <h1>{title}</h1>
            <h6>{author}</h6>
        </article>
    );
};

ReactDOM.render(
    <BookList/>,
    document.getElementById('root')
);


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
    // const { img, title, author } = props;

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


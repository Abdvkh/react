import React from 'react';
import ReactDOM from 'react-dom';

/** CSS */
import './index.css';

//setup vars
const firstBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
}
const secondBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81gfKJtXGTL._AC_UL200_SR200,200_.jpg',
    author: 'Kamala Harris',
    title: 'Superheroes Are Everywhere',
}

function BookList(){
    return (
        <section className="booklist">
            <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ea natus nemo neque non reiciendis saepe sit temporibus tenetur vero.</p>
            </Book>
            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
        </section>
    );
}


const Book = (props/*{img, title, author, children}*/) => {
    const {img, title, author} = props;

    console.log(props);

    return (
        <article className="book">
            <img src={img} alt=""/>
            <h1>{title}</h1>
            <h4>{author.toUpperCase()}</h4>
            {props.children}
        </article>
    );
}

ReactDOM.render(
    <BookList/>,
    document.getElementById('root')
);


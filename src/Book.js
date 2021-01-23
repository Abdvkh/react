import React from "react";

const Book = ({ img, title, author }) => {

    return (
        <article className="book" onMouseOver={() => {console.log(title)}}>
            <img src={img} alt=""/>
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h6>{author}</h6>
        </article>
    );
};

export default Book;

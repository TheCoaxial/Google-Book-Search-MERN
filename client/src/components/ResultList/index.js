import React from  "react";


function BookResults(props) {


    const books = props.books.map((book) => 
    
    [
        <li>
            <div className="float-container">
                <div className="float-child"><p>{book.items.volumeInfo.title}</p></div>
                <div className="float-child"><p>{book.items.volumeInfo.authors[0]}</p></div>
                <div className="float-child"><p>{book.items.volumeInfo.description}</p></div>
                <div className="float-child"><p>{book.items.volumeInfo.imageLinks.smallThumbnail}</p></div>
                <div className="float-child"><p>{book.items.volumeInfo.infoLinks}</p></div>
            </div>
        </li>
    ]

    );

    return(
        <ul className="lItem"> {books} </ul>
    )
}

export default BookResults;
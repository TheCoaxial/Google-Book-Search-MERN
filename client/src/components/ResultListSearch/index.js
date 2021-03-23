import React from  "react";


function BookResults({ children }) {

    
    // const books = children.books.map((book) => 
    // console.log("Made it here" +books)
    // [
    //     <li>
    //         <div className="float-container">
    //             <div className="float-child"><p>{book.items.volumeInfo.title}</p></div>
    //             <div className="float-child"><p>{book.items.volumeInfo.authors[0]}</p></div>
    //             <div className="float-child"><p>{book.items.volumeInfo.description}</p></div>
    //             <div className="float-child"><p>{book.items.volumeInfo.imageLinks.smallThumbnail}</p></div>
    //             <div className="float-child"><p>{book.items.volumeInfo.infoLinks}</p></div>
    //         </div>
    //     </li>
        
    // ]
    <li>
        <div className="float-container">
            <div className="float-child"><p>{children.volumeInfo}</p></div>
            {console.log(children)}
        </div>
    </li>

    // );

    return(
        <ul className="lItem"> {children} </ul>
    )
}

export default BookResults;
import React, { useEffect } from "react";
import BookResults from "../ResultList";
import DelBtn from "../DeleteButton";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";


function BookList() {
    const [state,dispatch] = useStoreContext();

    const removeBook = id => {
        API.deleteBook(id)
        .then(() =>{
            dispatch({
                type: "REMOVE_BOOK",
                _id: id
            });
        })
        .catch(err => console.log(err));
    };



    useEffect(() => {
        getBooks();
    }, []);


    return (
        <div>
            <h1>Saved Books</h1>
            <h3>Click the X to remove a book</h3>
            {state.books.length ? (
                <BookResults 
                 books = {this.state.books} >
                    <DelBtn onClick={() => removeBook(post._id)} />
                </BookResults>
            ) : (
                <h3>You haven't added any books yet!</h3>
            )}
        </div>
    )
}

export default BookList;
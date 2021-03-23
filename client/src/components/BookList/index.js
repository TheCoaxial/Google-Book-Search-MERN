import React, { useEffect } from "react";
import BookResults from "../ResultList";
// import { ListItem, List } from "../ResultList";
import DelBtn from "../DeleteButton";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";




function BookList() {
    const [state, dispatch] = useStoreContext();
    
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
        API.getBooks("/books")
             .then(response => {
                
                // console.log("Response" + response)
                dispatch({type: "LOADING"});
                dispatch({type: "ADD_BOOK", payload: response.data});
                
                // console.log(response );
            })
    }, []);
    

    
    return (
        <div>
            <h1>Saved Books</h1>
            <h3>Click the X to remove a book</h3>
            {state.saved[0] ? (
                <BookResults>
                    {state.saved[0].map(book => (
                    // console.log("Hi", book.title )
                        <strong>
                        {book.title}
                        {<DelBtn onClick={() => removeBook(book._id)} />}
                        </strong>
                    ))}
                    
                </BookResults>
            ) : (
                <h3>You haven't added any books yet!</h3>
            )}
            
            
        </div>
        
        
    )
}

export default BookList;
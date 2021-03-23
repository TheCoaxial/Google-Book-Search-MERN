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
                
                 console.log(response );
            })
    }, []);
    

    
    return (
        <div>
            <h1>Saved Books</h1>
            <h4>Click the X to remove a book</h4>
            <br></br>
            <div>
            {state.saved[0] ? (
                <BookResults>
                    {state.saved[0].map(book => (
                     
                        <strong>
                            {console.log("Hi", book )}
                        {book.title} 
                        <br></br>
                        <img src={book.image}></img>
                        {<DelBtn onClick={() => removeBook(book._id)} />}  
                        <br></br>
                        <br></br>
                        </strong>
                    ))}
                    
                </BookResults>
            ) : (
                <h3>You haven't added any books yet!</h3>
            )}
            </div>
            
            
        </div>
        
        
    )
}

export default BookList;
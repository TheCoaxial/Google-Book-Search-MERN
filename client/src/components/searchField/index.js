import React, {useState, useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import ResultListSearch from "../ResultListSearch";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import AddButton from "../AddButton";

function CreateBookSearch() {
  
  const [books, setBookData] = useState([]);
  const [saved, dispatch] = useStoreContext();
  var searchLink=""

  const addBook = id => {
    API.saveBook(id)
    .then(() =>{
        dispatch({
            type: "ADD_BOOK",
            _id: id
        });

    })
    .catch(err => console.log(err));
  };

    console.log(books.volumeInfo);

    

  const handleSubmit = event => {
    event.preventDefault();
    
     let title= document.getElementById('search').value;;
    // titleRef.current.value = document.getElementById('search').value;;
    API.search(title)
      .then(result => {
        //   console.log(result.data.items);
          setBookData(result.data.items);
          

     
        searchLink = "https://www.google.com/search?q="+books.volumeInfo.title+"&tbm=bks"
        
      }) 
      .catch(err => console.log(err)); 
    };
    

  return (
    <div>
      <h1>Search for a book!</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5"  id="search"  placeholder="Title" />
        <button className="btn btn-success mt-3 mb-5"  type="submit">
          Search 
        </button>
      </form>
      <div>
            <h1>Book Search</h1>
            <h3>Click the + to add a book to your Saved List</h3>
            {books[0] ? (
                <ResultListSearch>
                    {/* {console.log("Hi", books )} */}
                    {books.map(books => (
                    //  <Link to = {searchLink}>
                        <strong>
                        {<AddButton onClick={() => addBook(books.volumeInfo)} />}
                        {books.volumeInfo.title} <br></br>
                        
                        {console.log(books.id)}
                        </strong>
                    // </Link>
                    ))}

                </ResultListSearch>
            ) : (
                <h3>Enter A title to search!</h3>
            )}


        </div>
    </div>
    
  );
}

export default CreateBookSearch;
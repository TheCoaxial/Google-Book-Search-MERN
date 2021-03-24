import React, {useState, useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import ResultListSearch from "../ResultListSearch";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import AddButton from "../AddButton";
import Image from "../Img";

function CreateBookSearch() {
  
  const [books, setBookData] = useState([]);
  const [saved, dispatch] = useStoreContext();
  var searchLink=""
//   var bookImage = ""
  

  const addBook = id => {
    API.saveBook(id)
    .then(() =>{
        dispatch({
            type: "ADD_BOOK",
            _id: id,
            title: books.volumeInfo.title ,
            author: books.volumeInfo.author ,
            description: books.volumeInfo.description ,
            image: books.volumeInfo.imageLinks.smallThumbnail ,
            link: books.volumeInfo.infoLink 

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
           console.log(result.data.items);
          setBookData(result.data.items);
          

     
        searchLink = "https://www.google.com/search?q="+books.volumeInfo.title+"&tbm=bks"
        
      }) 
      .catch(err => console.log(err)); 
    };
    

  return (
    <div>
      <h1>Search for a book!</h1>
      <form className="form-group mt-4 mb-4" onSubmit={handleSubmit}>
        
        <button className="btn btn-success mt-3 mb-4"  type="submit">
          Search 
        </button>
        <input className="form-control mb-6"  id="search"  placeholder="Title" />
      </form>
      <div>  
        <h3 style={{textAlign:"center"}}>Click the + to add a book to your Saved List</h3>
        {books[0] ? (
            <ResultListSearch>
                {/* {console.log("Hi", books )} */}
                {books.map(books => (
                    <div>
                        <strong>
                            {<AddButton onClick={() =>  API.saveBook(books.id)} />}
                            {books.volumeInfo.title} 
                            <br></br>
                            <a href={books.volumeInfo.infoLink}>
                            <img  src={books.volumeInfo.imageLinks.smallThumbnail}></img> 
                            </a>
                            <br></br>
                            <br></br>
                            {console.log(books.id)}
                        </strong>
                    </div>               
                ))}
            </ResultListSearch>
        ) : (
            <h3 style={{textAlign:"center"}}>Enter A title to search!</h3>
        )}
        </div>
    </div>
    
  );
}

export default CreateBookSearch;